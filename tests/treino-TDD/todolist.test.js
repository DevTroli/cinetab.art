const GerenciadorTarefas = require('./todolist.js')

test("Iniciar lista como vazia", () => {
    const gerenciador = new GerenciadorTarefas();
    console.log("Construtuor criado com sucesso")
    expect(gerenciador.tarefas.length).toBe(0)
    console.log("Lista de tarefas inicou zerada!")
})

test('deve listar todas as tarefas', () => {
    // Arrange
    const gerenciador = new GerenciadorTarefas();
    gerenciador.adicionar('Comprar pão');
    gerenciador.adicionar('Estudar JavaScript');
    gerenciador.adicionar("Estudar TDD");
    
    // Act
    const listaDeTarefas = gerenciador.listar();
    
    // Assert
    expect(listaDeTarefas).toHaveLength(3);
    expect(listaDeTarefas[0].texto).toBe('Comprar pão');
    expect(listaDeTarefas[1].texto).toBe('Estudar JavaScript');
    expect(listaDeTarefas[2].texto).toBe("Estudar TDD")

    console.log("Listagem de tarefas está 100% funcional")
  });

test("Deve adicionar uma nova tarefa", () => {
    const gerenciador = new GerenciadorTarefas();
    gerenciador.adicionar("Estudar TDD")
    console.log("Tarefa adicionada na lista com sucesso!")
    expect(gerenciador.tarefas).toContainEqual({
        id:  1,  
        texto: "Estudar TDD", 
        completada: false 
      });
})

test ("Deve concluir uma tarefa", () => {
    const gerenciador = new GerenciadorTarefas();
    gerenciador.adicionar("Tarefa facil")
    gerenciador.concluir(1); // ✅ Conclui a tarefa de id=1
    expect(gerenciador.tarefas[0].completada).toBe(true);
    console.log("Tarefa marcada como concluida perfeitamente")
})

test('deve excluir uma tarefa', () => {
    // Arrange
    const gerenciador = new GerenciadorTarefas();
    gerenciador.adicionar('Comprar pão');
    gerenciador.adicionar('Estudar JavaScript');
    gerenciador.adicionar("Estudar TDD");
    
    // Act
    gerenciador.excluir(1); // Exclui a segunda tarefa (Estudar JavaScript)
    
    // Assert
    expect(gerenciador.tarefas).toHaveLength(2);
    expect(gerenciador.tarefas[0].texto).toBe("Comprar pão");
    expect(gerenciador.tarefas[1].texto).toBe("Estudar TDD");

    console.log("Tarefa excluida de forma satisfatoria")
  });