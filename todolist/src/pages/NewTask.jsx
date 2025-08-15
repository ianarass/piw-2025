export default function NewTask() {
    return (
        <div>
            <h1>Criar nova tarefa</h1>
            <form>
                <label>
                    Título:
                    <input type="text" name="title" />
                </label>
                <label>
                    Descrição:
                    <textarea name="description"></textarea>
                </label>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}
