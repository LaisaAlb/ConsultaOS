import { FiMessageCircle } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";

export default function Dashboard(){
    return(
        <div>
            <Header />
        
            <div className="content">
                   <Title name="Consulta OS">
                       <FiMessageCircle size={25} />
                   </Title>
            </div>

            <h1>Teste</h1>
        </div>
    )
}