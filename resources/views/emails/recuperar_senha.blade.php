@component('mail::message', ['header_title' => "Bem-vindo!"])
<h1 style="font-size: 2em; text-align:center;  margin-bottom: 0px">Você esqueceu,</h1>
<h1 style="color: #0F6422; font-size: 2em; text-align:center;">Sua Senha ?</h1>


<p style="color: #0F6422; text-align:center; margin-bottom: 0px">Não se preocupe.</p>
<p style="text-align:center;  color:#363636; margin-bottom: 0px; font-family: Poppins;font-style: normal;font-weight: 500;font-size: 16px;line-height: 24px;">Você pode criar uma nova senha</p>
<p style="text-align:center;  color:#363636; margin-bottom: 0px; font-family: Poppins;font-style: normal;font-weight: 500;font-size: 16px;line-height: 24px;">clicando no botão abaixo.</p>
<br>

{{-- <div style="cursor: pointer;text-align:center; color: #FFF; font-family: Poppins;font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;"><a type="button" href={{$urlToResetForm}}><button type="button" style="background: #0D5636; border-radius: 100px; width: 241px; height: 59px; color: #FFF; font-family: Poppins;font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px; cursor: pointer;">Recuperar Senha</button></a></div> --}}
@component('mail::button', ['url' => $urlToResetForm])
    Redefinir Senha
@endcomponent

<br><p style="text-align:center;  color:#363636; margin-bottom: 0px; font-family: Poppins;font-style: normal;font-weight: 500;font-size: 16px;line-height: 24px;">Se tiver problemas ao clicar no botão</p><p style="text-align:center; color: #363636; margin-bottom: 0px">acesse pelo link abaixo.</p><p style="color: #81A134;  margin-bottom: 0px; text-align:center;">O link expira em 60 minutos</p>
<br><div style="text-align:center;  margin-bottom: 0px"><a href={{$urlToResetForm}}>{{$urlToResetForm}}</a></div>


@endcomponent
