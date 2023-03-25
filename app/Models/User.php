<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Http\Controllers\Notifications\PasswordResetNotification;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'ativo',
        'codigo_w3',
        'fornecedor_w3',
        'fornecedor_senior',
        'id_situacao',
        'id_modelos_remuneracoes',
        'valor_remuneracao',
        'data_admissao',
        'data_saida',
        'cod_centro_custo',
        'cod_colaborador_hcm',
    ];

    protected $table = 'users';
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    protected function rules()
    {
        return [
            'roles'                   => ['required'],
            'roles.*'                 => ['distinct'],
            'name'                    => ['string', 'required', 'max:50'],
            'codeProvider'            => ['nullable','string', 'max:15'],
            'codeSenior'              => ['integer', 'min:1', 'max:999999999', 'unique:users,fornecedor_senior'],
            'email'                   => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password'                => ['required', 'string'],
            'confirm_password'        => ['string', 'required'],
            // 'id_situacao'             => ['required', 'integer'],
            'id_modelos_remuneracoes' => ['required', 'integer'],
            'data_admissao'           => ['required', 'date'],
            'id_status_user'          => ['integer'],
            'cod_centro_custo'        => ['required', 'integer', 'min:1', 'max:999999999', 'unique:users,cod_centro_custo'],
        ];
    }

    protected function rulesEdit($id)
    {
        return [
            'roles'                   => ['required'],
            'roles.*'                 => ['distinct'],
            'name'                    => ['string', 'required', 'max:50'],
            'codeProvider'            => ['nullable','string', 'max:15'],
            'codeSenior'              => ['integer', 'min:1', 'max:999999999', 'unique:users,fornecedor_senior,' .$id],
            'email'                   => ['required', 'string', 'email', 'max:255', 'unique:users,email, ' .$id],
            // 'id_situacao'             => ['required', 'integer'],
            'id_modelos_remuneracoes' => ['required', 'integer'],
            'data_admissao'           => ['required', 'date'],
            'id_status_user'          => ['integer'],
            'cod_centro_custo'        => ['required', 'integer', 'min:1', 'max:999999999', 'unique:users,cod_centro_custo,' .$id],
        ];
    }

    protected function customMessages()
    {
        return [
            'roles.required' => 'O campo perfil é obrigatório',
            'roles.*.distinct' => 'O campo perfil não pode ter perfis duplicados',
            'email.required' => 'O campo email é obrigatório',
            'email.email' => 'O campo email precisa conter um email válido',
            'email.unique' => 'Email já cadastrado',
            'email.max' => 'O campo email deve ter no máximo 255 caracteres',
            'password.required' => 'O campo senha é obrigatório',
            'confirm_password.required' => 'O campo confirmação de senha é obrigatório',


            'name.string'       => 'O campo nome precisa ser uma string',
            'name.required'     => 'O campo nome é obrigatório',
            'name.max'          => 'O campo nome é de no máximo 50 caracteres',

            'codeProvider.string'       => 'O campo codigo colaborador HCM ser uma string',
            'codeProvider.max'          => 'O campo codigo colaborador HCM é de no máximo 50 caracteres',

            // 'id_situacao.required' => 'O campo situação é obrigatório',
            // 'id_situacao.integer' => 'O campo situação precisa ser um número inteiro',
            'id_modelos_remuneracoes.required' => 'O campo modelo de remuneração é obrigatório',
            'id_modelos_remuneracoes.integer' => 'O campo modelo de remuneração precisa ser um número inteiro',
            'data_admissao.required' => 'O campo data de admissão é obrigatório',
            'data_admissao.date' => 'O campo data de admissão precisa ser uma data',
            'data_saida.date' => 'O campo data de saída precisa ser uma data',
            'codeSenior.unique'   => 'Um usuário ja possui este código sênior cadastrado no sistema',
            'id_status_user.integer' => 'O campo status do usuário precisa ser um número inteiro',
            'cod_centro_custo.integer'   => 'O centro de custo tem que ser um número inteiro',
            'cod_centro_custo.min'   => 'O centro de custo é no mínimo 1',
            'cod_centro_custo.max'   => 'O centro de custo é no máximo 999999999',
            'cod_centro_custo.unique'   => 'Um usuário ja possui este código centro de custo cadastrado no sistema',
            'cod_centro_custo.required'   => 'O código centro de custo é obrigatório',
        ];
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }

    public function customValidate(Request $request)
    {
        $validator = Validator::make( $request->all(), $this->rules(), $this->customMessages());

        if ( $validator->fails() )
        {
            return $validator->errors();
        }
        else
        {
            return [];
        }
    }

    public function customValidateEdit(Request $request, $id)
    {
        $validator = Validator::make( $request->all(), $this->rulesEdit($id), $this->customMessages());

        if ( $validator->fails() )
        {
            return $validator->errors();
        }
        else
        {
            return [];
        }
    }

    public static function passwordNotEqual($passwordOne, $passwordTwo)
    {
        return $passwordOne != $passwordTwo;
    }
}
