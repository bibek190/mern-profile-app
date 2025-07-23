import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>
        Welcome, {user ? `${user.username} to our website.` : `to our website.`}{" "}
      </h1>
      <h2>About Us</h2>
      <br />
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        ipsam veritatis labore deserunt excepturi beatae cupiditate itaque
        blanditiis deleniti accusantium voluptates velit, tempore iste neque nam
        ipsa similique corrupti voluptate, maiores distinctio, accusamus nulla!
        Modi perspiciatis quo reprehenderit officia quis!
      </h2>
    </div>
  );
};

export default About;
