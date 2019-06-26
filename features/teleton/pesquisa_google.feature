# language: pt

Funcionalidade: Pesquisa Google

Contexto:
    Dado que o usuario 'emerson.mendes' esteja logado

Cenario: Pesquisar a Invillia no google
    Dado que o usuário acesse a pagina do google
    Quando clica na caixa de pesquisa
    E digite 'Invillia'
    E pressionar a tecla enter
    Então deve aparecer em primeiro lugar o link 'https://jobs.kenoby.com/invillia'


    