import Tasks from "../Tasks";

function SelectedProject({project, onDelete}) {

    const formatDate = new Date(project.dueDate).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-5xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>    
                <p className="mb-4 text-stone-400">{formatDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>           
            </header>
            <Tasks />
        </div>
    );
}
export default SelectedProject;