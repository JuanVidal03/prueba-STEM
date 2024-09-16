import { useContext } from "react";
import LoggedLayout from "../layouts/Logged.layout";

import { AuthContext } from "../context/AuthContext";

const Home = () => {

  const { user } = useContext(AuthContext);

  document.title = "Inicio de la aplicación";

  return (
    <LoggedLayout>
      <div>
        <div>
          <h1 className="text-3xl font-semibold mb-6">Bienvenido, {user.nombreCompleto}!</h1>
        </div>

        <div>
          
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem rem id alias assumenda porro ipsum blanditiis
            doloribus illum cumque aperiam. Hic accusantium alias eius
            perferendis eos. Voluptate, at! Facere qui similique iste ipsa sit
            vero accusamus iusto voluptatem. Molestias, amet. Fugit in
            dignissimos eveniet non ducimus officiis aperiam quos sed recusandae
            saepe magni facere, nostrum temporibus voluptates odio corporis
            laudantium id, voluptatem illum deserunt ipsam atque quidem est?
            Quibusdam laudantium recusandae repellat iusto pariatur dolore rem
            facere incidunt debitis velit? Repellendus harum fugiat, nobis esse
            nisi, dolorem expedita nostrum delectus quidem sapiente eaque
            dolorum corrupti magni minima rem iste ea.
          </p>s
        </div>
      </div>
    </LoggedLayout>
  );
};

export default Home;
