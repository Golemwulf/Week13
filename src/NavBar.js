import { Button } from "react-bootstrap";

export default function Nav() {

    return (
      <nav className="navBar">
        <a href="http://localhost:3000/">
          <Button type="button" id="home-btn">Home</Button>
        </a>
        <a href="http://localhost:3000/">
        <Button id="pref-btn">Preferences</Button>
        </a>
        <a href="http://localhost:3000/">
        <Button id="contact-btn">Contact</Button>
        </a>
      </nav>
    )
  }