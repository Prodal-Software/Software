<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Logs;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'getPerfil']]);
    }

    private function getPerfil()
    {
        $user = User::find(auth()->user()->id);

        return $user;
    }

    public function register(Request $request)
    {
        try{
            DB::beginTransaction();
            $userDefault = new User();
            $errorsUser = $userDefault->customValidate($request);
            if($errorsUser)
            {
                return response()->json(['error' => $errorsUser],404);
            }

            if ( User::passwordNotEqual( request('password'), request('confirm_password')) ){
                return response()->json(['message'=> "As senhas não conferem"], 401);
            }

            User::Create([
                'name'=>request('name'),
                'email'=>request('email'),
                'password'=>Hash::make(request('password'))
            ]);

            DB::commit();
            return response()->json(['status' => true,'success'=>'Email  '.request('email').' cadastrado com sucesso'],201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message'=>'Não foi possível registrar o usuário. Contate o suporte.'.$e->getMessage()], 500);
        }

        return $this->login(request());
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        $token = auth()->attempt($credentials);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Usuário e/ou senha inválidos'], 401);
        }

        if(auth()->user()->ativo == 1){
            return $this->respondWithToken($token);

        }else{
            return response()->json(['error' => 'Usuário Desabilitado'], 401);
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json($this->getPerfil());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function updatePassword(Request $request, $id)
    {
        DB::beginTransaction();
        try{
            $user = User::findOrFail(auth()->user()->id);

            $credentials = ["email" => $user->email, "password" =>request('password')];
            if (! $token = auth()->attempt($credentials)){
                return response()->json(['errorNewPassword' => 'Senha atual inválida'], 401);
            }

            if ( User::passwordNotEqual(request('new_password'), request('confirm_password'))) {
                return response()->json(['error' => 'As senhas não conferem'],401);
            }

            if (request('new_password') == "") {
                return response()->json(['errorNewPassword' => 'Senha não inserida']);
            }

            $user->update([
                'password'=>Hash::make(request('new_password')),
            ]);

            DB::commit();
            return response()->json(['success' => 'Senha alterada com sucesso','user' => $this->getPerfil()]);

        }catch(\Exception $e){
            return response()->json(['error' => 'Erro ao atualizar sua senha. Tente novamente mais tarde !'],401);
        }
    }

    public function alterInformation(Request $request, $id){
        return 'não implementado';

    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL(),
            'user' => auth()->user(),
            'user'=>$this->getPerfil()
        ]);
    }
}
