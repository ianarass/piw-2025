import "./Tasks.css";

export default function Tasks() {

  return (
    <form className="tasks">
	<div>
	  <h1>Lista de Tarefas</h1>

      <input type="checkbox" name="feita" value="feita" />
      <label htmlFor="title">nome:</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="description">descrição:</label>
      <textarea id="description" name="description" required></textarea>
      <label htmlFor="category">prioridade:</label>
      <select className="prioridade" id="category">
        <option value="baixa">baixa</option>
        <option value="media">média</option>
        <option value="alta">alta</option>
      </select>
  </div>
    <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

