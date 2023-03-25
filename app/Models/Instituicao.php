<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class Instituicao extends Model
{
    use HasFactory;
    protected $table = 'instituicao';
    protected $fillable = [
        'nome',
        'codigo',
        'municipio',
        'telefone',
        'dia_semana',
        'turno',
        'status'
    ];

    public function buscaInstituicoes()
    {
        $instituicoes = Instituicao::select('*')
            ->orderBy('instituicao.id', 'asc')
            ->paginate(10);

        return $instituicoes->toJson();
    }

    public function buscaInstituicaoPorId($id)
    {

        try {
            $instituicao = Instituicao::find($id);

            if ( !$instituicao ) {
                throw new Exception("Instituição não existe", 404);
            }

            return $instituicao;

        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], $th->getCode());
        }
    }

    public function cadastraInstituicao($request)
    {
        try {
            DB::beginTransaction();

            $validation = $this->customValidate($request);

            if ($validation) {
                throw new Exception($validation->first(), 403);
            }

            Instituicao::create([
                'nome' => $request->nome,
                'codigo' => $request->codigo,
                'municipio' => $request->municipio,
                'telefone' => $request->telefone,
                'dia_semana' => $request->dia_semana,
                'turno' => $request->turno
            ]);

            DB::commit();

            return response()->json(['success' => 'Instituição adicionada com sucesso.'], 201);
        } catch (\Throwable $th) {
            DB::rollBack();
            $httpCode = $th->getCode() > 600 ? 500 : $th->getCode();
            return response()->json(['error' => $th->getMessage()], $httpCode);
        }
    }

    public function editaInstituicao($request, $id)
    {
        try {
            DB::beginTransaction();

            $validation = $this->customValidate($request);
            if ($validation) {
                throw new Exception($validation->first(), 403);
            }

            $instituicao = self::buscaInstituicaoPorId($id);

            $instituicao->update([
                'nome' => $request->nome,
                'codigo' => $request->codigo,
                'municipio' => $request->municipio,
                'telefone' => $request->telefone,
                'dia_semana' => $request->dia_semana,
                'turno' => $request->turno,
                'status' => $request->status
            ]);

            DB::commit();

            return response()->json(['success' => 'Instituição editada com sucesso.'], 200);
        } catch (\Throwable $th) {
            DB::rollBack();
            $httpCode = $th->getCode() > 600 ? 500 : $th->getCode();
            return response()->json(['error' => $th->getMessage()], $httpCode);
        }
    }

    protected function rules()
    {
        return [
            'nome' => ['required', 'max:255'],
            'codigo' => ['required', 'max:255'],
            'municipio' => ['required', 'max:255'],
            'telefone' => ['required','integer', 'max:99999999999'],
            'dia_semana' => ['required','integer'],
            'turno' => ['required','integer', 'max:2', 'min:1'],
            'status' => ['integer', 'max:2', 'min:1']
        ];
    }

    protected function customMessages()
    {
        return [
            'nome.required' => 'O nome da Instituição é obrigatório.',
            'nome.max' => 'O nome da Instituição tem o valor máximo de 255 caracteres.',

            'codigo.required' => 'O codigo da Instituição é obrigatório.',
            'codigo.max' => 'O codigo da Instituição tem o valor máximo de 255 caracteres.',

            'municipio.required' => 'O município da Instituição é obrigatório.',
            'municipio.max' => 'O município da Instituição tem o valor máximo de 255 caracteres.',

            'telefone.required' => 'O telefone da Instituição é obrigatório.',
            'dia_semana.integer' => 'O campo dia da semana precisa ser um valor inteiro.',
            'telefone.max' => 'O telefone da Instituição tem o valor máximo de 11 caracteres.',

            'dia_semana.required' => 'O campo dia da semana é obrigatório.',
            'dia_semana.integer' => 'O campo dia da semana precisa ser um valor inteiro.',

            'turno.required' => 'O campo turno é obrigatório.',
            'turno.integer' => 'O campo turno precisa ser um valor inteiro.',
            'turno.max' => 'O campo turno tem valor máximo de 2.',
            'turno.min' => 'O campo turno tem valor mínimo de 1.',

            'status.integer' => 'O campo status precisa ser um valor inteiro.',
            'status.max' => 'O campo status tem valor máximo de 2.',
            'status.min' => 'O campo status tem valor mínimo de 1.',
        ];
    }

    public function customValidate(Request $request)
    {
        $validator = Validator::make($request->all(), $this->rules(), $this->customMessages());

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            return [];
        }
    }
}
