const readline = require('readline');
const TodoList = require('./todolist');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoList = new TodoList();

function exibirMenu() {
  console.log('\n===== Lista de Tarefas =====');
  console.log('1. Adicionar tarefa');
  console.log('2. Listar tarefas');
  console.log('3. Marcar tarefa como concluída');
  console.log('4. Excluir tarefa');
  console.log('5. Sair');
  
  rl.question('\nEscolha uma opção: ', (opcao) => {
    switch(opcao) {
      case '1':
        adicionarTarefa();
        break;
      case '2':
        listarTarefas();
        break;
      case '3':
        marcarComoConcluida();
        break;
      case '4':
        excluirTarefa();
        break;
      case '5':
        console.log('Até mais!');
        rl.close();
        break;
      default:
        console.log('Opção inválida!');
        exibirMenu();
    }
  });
}

function adicionarTarefa() {
  rl.question('Digite o texto da tarefa: ', (texto) => {
    todoList.adicionar(texto);
    console.log('Tarefa adicionada com sucesso!');
    exibirMenu();
  });
}

function listarTarefas() {
  const tarefas = todoList.listar();
  
  console.log('\n===== Suas Tarefas =====');
  if (tarefas.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
  } else {
    tarefas.forEach((tarefa, indice) => {
      const status = tarefa.concluida ? '[✓]' : '[ ]';
      console.log(`${indice}. ${status} ${tarefa.texto}`);
    });
  }
  
  exibirMenu();
}

function marcarComoConcluida() {
  listarTarefas();
  
  rl.question('Digite o número da tarefa que deseja marcar como concluída: ', (indice) => {
    todoList.marcarComoConcluida(parseInt(indice));
    console.log('Tarefa marcada como concluída!');
    exibirMenu();
  });
}

function excluirTarefa() {
  listarTarefas();
  
  rl.question('Digite o número da tarefa que deseja excluir: ', (indice) => {
    todoList.excluir(parseInt(indice));
    console.log('Tarefa excluída com sucesso!');
    exibirMenu();
  });
}

// Iniciar o aplicativo
console.log('Bem-vindo à sua Lista de Tarefas!');
exibirMenu();