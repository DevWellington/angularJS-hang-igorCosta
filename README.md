## Anotações Curso Angular JS (Igor Costa)

### Agenda

- O que, porque e como é o AngularJS?
- Conhecendo as Comunidades
- Hands On


####O que eh ?
- HTML++
	- Transformar o HTML em uma estrutura de tags dinamica;
	- Abastece em cima do HTML

- Basicamente transformar simples aplicativos ou sites, em WebApps
- Da essa ideia de Aplicação Rica (Aplicações Ricas para Internet)
- Aplicacoes desktop rodando em um navegador

- Simplicidade eh o ultimo grau da satisfação;
- Eh um framework para criar aplicacoes Web com alta velocidade, testavel e de facil manutenção;


- 3D
	- Directives
		Eh basicamente implementacao inicial do Web Components
		
	- Dependecy Injection
		Possibilidade de incluir Classes externas dentro dos Controllers;
		Fundamental para manter o Codigo com facilidade de manutencao
	
	- Data-dinding
		No meu usuario tem um campo de Input, o qual ele digite um valor, o valor seja replicado em varios outros inputs;
		Util para Aplicacoes de financeiros (usa-se a necessidade de mensuramento de Dados);
		Resalva:
			Se usar em excesso a app fica lenta;
			Ele vai usar varios escutadores (Watchs) e fica lento;
	
- MVC
	View eh o que o usuario enxerga
	Chama o Controller (Classe para controllar a view)
	E a Model acessa os Dados (Os dados, idade, altura, peso, valor, etc);
	
	
####Por quê?
- Fator relevante

	Transforme uma plataforma
	Nao somente por diretivas, DI, dataBindings;
	
- Framework bom eh aquele que trabalha como uma plataforma, e o AngularJS nao deixa nada a desejar quanto a esse requisito;	


#### Praticas (Hands On)

- Sempre trabalhe com versoes estaveis (stables)

- Escopo isolado eh igual ler um livro, so vai ler o conteudo da proxima pagina

- Isolar variaveis, comportamentos, em uma so pagina, onde trabalha com variaveis, sem interromper a estrutura do outro controller.

```html
<!DOCTYPE html>
<html ng-app="HangoutApp">
<head>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body ng-controller="MainController">
  <p>{{amigos}}</p>
  
  <ul>
    <li ng-repeat="fera in feras">{{fera}}</li>
  </ul>
  
  <p minha-joia>
        
  </p>
  <minha-joia>
    
  </minha-joia>
  
</body>
</html>
```

```javascript
var app = angular.module('HangoutApp',[]);

app.controller('MainController',['$scope',function($scope){
   $scope.amigos = 'Ola amigos do AngularJS';
   
   // Trabalhando com arrays
   $scope.feras = ['Leopardo', 'Leao', 'Tigre'];
   
}]);

app.directive('minhaJoia', function(){
	return {
		// somente diretivas do tipo attributes (A), Attributes e Elements (AE)
		restrict: 'AE', 
		template: '<h4>Tudo Joia</h4>',
		link: function(scope, element, attrs){
			element.bind('mouseover', function(){
				alert('Passou por cima');
			});
		}
	};
  
});
```

- ng-s [Diretivas padroes do namespace do AngularJS](http://docs.angularjs.org/api)

Me permite criar nova maneiras de trabalhar com ele

- Estrutura de uma aplicação típica front-end
    - Controllers
    - Diretivas
    - Filtros
    - i18n (Internacionalizacao)
    - Servicos
    - utils
    - app.js (Bootstrap do AngularJS)
    - styles
    - views



### Hands On


- Ambiente:
    - **NodeJS** (npm = Node Package Manager)
    - Trinca de Ferro
        1. **yo** (npm install -g yo) - [Yeoman](http://yeoman.io/) 

        2. **Grunt** (npm install -g grunt-cli) - Tarefas repetitivas
        3. **bower** (npm install -g bower) - Gerenciador de Pacotes
  
	- Gerando o projeto com o Yeoman
        - Generators:
            - [Gerador de Estrutura de Aplicacao para AngularJS](https://github.com/yeoman/generator-angular)
            - npm install -g generator-angular
            - yo angular
                - Escolha os pacotes
            - Depois de Instalado tudo Execute:
                - bower install
                - npm install



### Inspiracoes para fazer um bom Design da Aplicacao

- [Cores do site](http://colourlovers.com/)
- [Snippets para Designers](http://dribbble.com)


### Comunidades Brasileiras

- Meetup (AngularJS Sao Paulo)
- Facebook (angularJsBrasil)
- Google Groups (angularjs-br)


### Exemplos:

- Criando um MPV (Mininum Viable Product)
    - **Pettoouse** (Gerenciamento de Pet House)
        - Login
        - DashBoard
        - Pedidos / Vendas
        - Clientes
        - Produtos
        - Fornecedores
        - Financeiro


####Distribuição para Servidor de Produção

- Tarefa para gerar o arquivo final;
    - **grunt build --force** (Gera um diretorio com o resultado final do que você fez)
        - Todas as dependencias, empacotando, minificando, etc;

- CORS para autenticacao

```javascript
  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    #'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);
```


#####Link do Video
[Criando Web Apps com AngularJS](https://www.youtube.com/watch?v=GRTBSmm-dlU)

#####Slides 
[Slides](https://docs.google.com/presentation/d/1u4EhvC_5_PlVnHaNJLd6J0LxQDjKVFtfJX6fcKHWsoM/edit?usp=sharing)

#####Projeto do Video
[Código fonte]
(https://github.com/igorcosta/webappshangout)

