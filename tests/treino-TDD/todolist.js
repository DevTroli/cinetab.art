class GerenciadorTarefas{
    constructor() {
        this.tarefas = [];
        this.contadorId = 1; // ✅ Gerenciador dedicado de IDs
      }

      listar(){
        return this.tarefas;
      }

      adicionar(texto) {
        this.tarefas.push({
          id: this.contadorId++, // ✅ Incrementa automaticamente  
          texto: texto,
          completada: false,
        })}

        concluir(id) {
            const tarefa = this.tarefas.find(t => t.id === id);
            if (tarefa) {
              tarefa.completada = true;
            }}
      
      excluir(id){
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
          this.tarefas.splice(id, 1);
        }
        }


      }

module.exports = GerenciadorTarefas;