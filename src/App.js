import React, {useState, useEffect} from 'react';
import './App.css';

import ReactDOMServer from 'react-dom/server';
import AASignature from './sigs/aa';


function App() {
  const [activeSig, setActiveSig] = useState('OldSigTemplate');

  const [name, setName] = useState('Alexander Appointments');
  const [title, setTitle] = useState('Title of Role');
  const [mobile, setMobile] = useState('0405 000 000');
  const [email, setEmail] = useState('aa@alexanderappointments.com.au');
  const [img, setImg] = useState('https://www.dropbox.com/s/s7q7niioxvj0tkc/Daniel-Colour.png?raw=1');
  const [lineColor, setLineColor] = useState('#fcb415');

  const [website, setWebsite] = useState('alexanderappointments.com.au');
  const [fullURL, setFullURL] = useState('https://alexanderappointments.com.au');
  const [officePhone, setOfficePhone] = useState('02 4940 8686');
  const [address, setAddress] = useState('Atlas Norwest<br /> Suite 415, Level 4 /n 2-8 Brookhollow Avenue, /n Norwest Business Park /nNorwest NSW 2153');

  const [linkedIn, setLinkedIn] = useState('https://www.linkedin.com/company/alexander-appointments');

  const [displayMoreVisibile, setDisplayMoreVisibile] = useState(false);
  
  const [codeVisible, setCodeVisible] = useState(false);

  const [sigOutput, setSigOutput] = useState(<AASignature name={name} title={title} mobile={mobile} email={email} img={img} href={fullURL} displayUrl={website} linkedIn={linkedIn} address={address} officePhone={officePhone} />);

  const [isCopied, setIsCopied] = useState(false);



  useEffect( () => {
    setSigOutput(<AASignature name={name} title={title} mobile={mobile} email={email} img={img} href={fullURL} displayUrl={website} linkedIn={linkedIn} address={address} officePhone={officePhone} />);
  }, [name, title, mobile, email, img, fullURL, website, linkedIn, address, officePhone]);

  function copySignature() {
    //const cb = navigator.clipboard;
    const sig = document.querySelector('.sig-container');

    // const { ClipboardItem } = window;

    // create a Range object
    let range = document.createRange();  
    
    // set the Node to select the "range"
    range.selectNode(sig);
    
    // add the Range to the set of window selections
    window.getSelection().addRange(range);
     
    // execute 'copy', can't 'cut' in this case
    document.execCommand('copy');
    
    //navigator.clipboard.writeText(finishedSignature);

    return;
  }

  function copyTheSignature(str) {
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    return;
  }

  function handleCopy() {
    const str = document.getElementById('sigOutput').innerHTML;

    copyTheSignature(str);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500)

  }


  function htmlProcess(str) {
      
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    
    return htmlFormat(div, 0).innerHTML;
  }

  function htmlFormat(node, level) {
    
    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;
    
    for (var i = 0; i < node.children.length; i++) {
        
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);
        
        htmlFormat(node.children[i], level);
        
        if (node.lastElementChild === node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }
    
    return node;
  }


  return (
    <div className="App">
      <div className="heading-block">
        <h1 style={{borderBottomColor: lineColor}}>Alexander Appointments<br /> Signature Builder <span className='attr'>by BEECH</span></h1>
      </div>
     
      <header className="App-header">   
        <form className='form-container'>
          <div className='form'>
            <div className="inputGroup-row">
              <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type='text' 
                    name='name' 
                    value={name} 
                    onChange={ (e) => { setName(e.target.value) }} />
              </div>
              <div className='inputGroup'>
                <label htmlFor='title'>Title</label>
                <input type='text' 
                    name='name' 
                    value={title} 
                    onChange={ (e) => { setTitle(e.target.value) }} />
              </div>
            </div>
            <div className="inputGroup-row">
              <div className='inputGroup'>
                <label htmlFor='mobile'>Mobile</label>
                <input type='text' 
                    name='mobile' 
                    value={mobile} 
                    onChange={ (e) => { setMobile(e.target.value) }} />
              </div>
              <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type='text' 
                    name='email' 
                    value={email} 
                    onChange={ (e) => { setEmail(e.target.value) }} />
              </div>
            </div>
            <div className='inputGroup'>
              <label htmlFor='imgUrl'>Img URL</label>
              <input type='text' 
                  name='imgUrl' 
                  value={img} 
                  onChange={ (e) => { setImg(e.target.value) }} />
              <p>
                Image needs to be uploaded to a webserver, paste the link here.
              </p>
            </div>
            <div className={ displayMoreVisibile ? "show-advanced" : "show-advanced hidden"}>
              <div className='inputGroup-row'>
                <div className='inputGroup'>
                    <label htmlFor='officePhone'>Office Phone</label>
                    <input type='text' 
                        name='officePhone' 
                        value={officePhone} 
                        onChange={ (e) => { setOfficePhone(e.target.value) }} />
                  </div>
                  <div className='inputGroup'>
                    <label htmlFor='linkedIn'>LinkedIn</label>
                    <input type='text' 
                        name='linkedIn' 
                        value={linkedIn} 
                        onChange={ (e) => { setLinkedIn(e.target.value) }} />
                  </div>
                </div>
                <div className="inputGroup-row">
                  <div className='inputGroup'>
                    <label htmlFor='website'>Website (Display)</label>
                    <input type='text' 
                        name='website' 
                        value={website} 
                        onChange={ (e) => { setWebsite(e.target.value) }} />
                  </div>
                  <div className='inputGroup'>
                    <label htmlFor='fullURL'>Full URL (the link)</label>
                    <input type='text' 
                        name='fullURL' 
                        value={fullURL} 
                        onChange={ (e) => { setFullURL(e.target.value) }} />
                  </div>
                </div>
              </div>
              <button onClick={ (e) => { e.preventDefault(); displayMoreVisibile ? setDisplayMoreVisibile(false) : setDisplayMoreVisibile(true); } } >{displayMoreVisibile ? 'LESS' : 'MORE'}</button>
          </div>
          
        </form>
        <div className='sigTemplateContainer'>
          <div className='sig-container' id='sigOutput'>
            {sigOutput}
          </div>
          <div className='dual-buttons'>
            <button className="align-bottom" onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy Signature'}</button>
            <button className="align-bottom show-code" onClick={ () => { codeVisible ? setCodeVisible(false) : setCodeVisible(true);  }}>Code</button>
          </div>
          <div className={codeVisible ? "html visible" : "html"}>
            <pre>
              {htmlProcess(ReactDOMServer.renderToString(sigOutput))}
            </pre>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
