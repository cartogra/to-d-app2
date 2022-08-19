import {useState} from "react"

  function MyUseStateHookExample(){
    const[nom,setNom]=useState("");
    const[email,setEmail]=useState("")
    const[sujet,setSujet]=useState("")
    const[message,setMessage]=useState("")
    const[radio,setRadio]=useState("false")
  const traitementform=e =>{
    e.preventDefault();
  const newnom=[...nom]
      setNom(newnom);
      
}
  return(
    <div>
    <form>
          <div>
              <label for="name">Nom :</label>
              <input type="text" id="name" name="user_name"placeholder="entrez votre nom"value={nom} onChange={e=>setNom(e.target.value)}/>
          </div>
          <div>
              <label for="mail">e-mail&nbsp;:</label>
              <input type="email" id="mail" name="user_mail"placeholder="entrez votre email"value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div>
              <label for="name">sujet :</label>
              <input type="text" id="sujet" name="user_sujet"placeholder="entrez votre sujet du message"value={sujet} onChange={e=>setSujet(e.target.value)}/>
          </div>
          <div>
              <label for="msg">Message :</label>
              <textarea id="msg" name="user_message"placeholder="entrez votre message"value={message} onChange={e=>setMessage(e.target.value)}></textarea>
          </div>

    <div>
      <input type="radio" id="je ne suis pas un robo"value="true" onChange={e=>setRadio(e.target.value)}/>
      <label for="je ne suis pas un robo">je ne suis pas un robo</label>
    </div>
    <button class="favorite styled"
        type="button">
    envoyer le message
</button>

      </form>
      <div>
        <br/>
        nom: {nom}
        <br/>
        email:{email}
        <br/>
        sujet:{sujet}
        <br/>
        message:{message}
        <br/>
        radio: {radio}
      </div>
      </div>
  );
}
export default MyUseStateHookExample;