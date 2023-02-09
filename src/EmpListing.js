const EmpListing = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-tittle">
                    <h2>Lista de Empleados</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nombre</td>
                                <td>Email</td>
                                <td>Telefono</td>
                                <td>Acción</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default EmpListing;