import React, { useRef } from 'react';
//import logo from './beech-and-co-logo.png';

const AASignature = ( { name, title, mobile, officePhone = '02 9659 4411', email, img = 'https://dl.dropboxusercontent.com/s/afj5ud201cokfl3/AA_Sigs_Prof%20pic%20layout_Daniel.png?raw=1', lineColor = '#ff00ff', href, displayUrl, logo = 'https://res.cloudinary.com/mon9466/image/upload/v1599185669/beech/beech-and-co-logo_ltrxih.png', address = 'Suite 415/2-8, Brookhollow Ave, Norwest NSW 2153', linkedIn } ) => {

  const ref = useRef(null);

  return (
      <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
          <tbody>
            <tr>
              <td>
                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                  <tbody>
                    <tr>
                      <td style={{verticalAlign: 'top'}}>
                        <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr>
                              <td className="sc-TOsTZ kjYrri" style={{textAlign: 'center'}}>
                                <img src={img} role="presentation" alt={name} width={100} height={150} className="sc-cHGsZl bHiaRe" style={{maxWidth: '100px', display: 'block'}} />
                              </td>
                            </tr>
                            <tr>
                              <td style={{textAlign: 'center', paddingTop: '20px'}}>
                                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', display: 'inline-block'}}>
                                  <tbody>
                                    <tr style={{textAlign: 'center'}}>
                                      <td>
                                        <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }} href="https://www.facebook.com/alexanderappointments/" color="#000000" className="sc-hzDkRC kpsoyz" style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(255,255,255)', textDecoration: 'none', textDecorationColor: '#ffffff' }}>
                                          <img src="https://www.dropbox.com/s/kfoz1n401c9raph/aa-fb.png?raw=1" alt="facebook" color="#000000" height={24} className="sc-bRBYWo ccSRck" style={{backgroundColor: 'rgb(255,255,255)', maxWidth: '135px', display: 'block'}} />
                                        </a>
                                      </td>
                                      <td width={5}>
                                        <div />
                                      </td>
                                      <td>
                                        <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href={linkedIn} color="#000000" className="sc-hzDkRC kpsoyz" style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(255,255,255)',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                          <img src="https://www.dropbox.com/s/guzpq8ojdezzrn8/aa-li.png?raw=1" alt="linkedin" color="#000000" height={24} className="sc-bRBYWo ccSRck" style={{backgroundColor: 'rgb(255,255,255)', maxWidth: '135px', display: 'block'}} />
                                        </a>
                                      </td>
                                      <td width={5}>
                                        <div />
                                      </td>
                                      <td>
                                        <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href="https://www.instagram.com/alexanderappointments/?hl=en" color="#000000" className="sc-hzDkRC kpsoyz" style={{display: 'inline-block', padding: '0px', backgroundColor: 'rgb(255,255,255)',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                          <img src="https://www.dropbox.com/s/wxkvh4qj0fac9h8/aa-in.png?raw=1" alt="instagram" color="#000000" height={24} className="sc-bRBYWo ccSRck" style={{backgroundColor: 'rgb(255,255,255)', maxWidth: '135px', display: 'block'}} />
                                        </a>
                                      </td>
                                      <td width={5}>
                                        <div />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width={20}>
                        <div />
                      </td>
                      <td style={{padding: '0px', verticalAlign: 'middle'}}>
                        <h3 color="#000000" className="sc-fBuWsC eeihxG" style={{margin: '0px', fontSize: '18px', color: 'rgb(0, 0, 0)'}}>
                          <span>{name}</span>
                        </h3>
                        <p color="#000000" fontSize="medium" className="sc-fMiknA bxZCMx" style={{margin: '0px', color: 'rgb(0, 0, 0)', fontSize: '14px', lineHeight: '22px'}}>
                          <span>{title}</span>
                        </p>
                        <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', width: '100%'}}>
                          <tbody>
                            <tr>
                              <td height={15} />
                            </tr>
                            <tr>
                              <td color="#787878" direction="horizontal" height={1} className="sc-jhAzac hmXDXQ" style={{width: '100%', borderBottom: '1px solid rgb(120,120,120)', borderLeft: 'none', display: 'block'}} />
                            </tr>
                            <tr>
                              <td height={15} />
                            </tr>
                          </tbody>
                        </table>
                        <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#787878" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}}>
                                          <img src="https://www.dropbox.com/s/p34h4ljmug8jcyl/aa-phone.png?raw=1" alt="" color="#787878" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}} />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px', color: 'rgb(0, 0, 0)'}}>
                                <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href={`tel:${officePhone}`} color="#000000" className="sc-gipzik iyhjGb" style={{ color: 'rgb(0, 0, 0)', fontSize: '11px',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                  <span>{officePhone}</span>
                                </a> | <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href={"tel:"+mobile} color="#000000" className="sc-gipzik iyhjGb" style={{ color: 'rgb(0, 0, 0)', fontSize: '11px',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                  <span>{mobile}</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#787878" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}}>
                                          <img src="https://www.dropbox.com/s/rw6su9imafxgkxo/aa-mail.png?raw=1"  alt="" color="#787878" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}} />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href={`mailto:${email}`} color="#000000" className="sc-gipzik iyhjGb"  style={{ color: 'rgb(0, 0, 0)', fontSize: '11px',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                  <span>{email}</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#787878" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}}>
                                          <img src="https://www.dropbox.com/s/g8cgbjhdf52j0gx/aa-link.png?raw=1"  alt="" color="#787878" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}} />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <a ref={ el => { if (el) el.style.setProperty('text-decoration', 'none', 'important'); }}  href={href} color="#000000" className="sc-gipzik iyhjGb" style={{ color: 'rgb(0, 0, 0)', fontSize: '11px',  textDecoration: 'none', textDecorationColor: '#ffffff'}}>
                                  <span>{displayUrl}</span>
                                </a>
                              </td>
                            </tr>
                            <tr height={25} style={{verticalAlign: 'middle'}}>
                              <td width={30} style={{verticalAlign: 'middle'}}>
                                <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                                  <tbody>
                                    <tr>
                                      <td style={{verticalAlign: 'bottom'}}>
                                        <span color="#787878" width={11} className="sc-jlyJG bbyJzT" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}}>
                                          <img src="https://www.dropbox.com/s/carq8w9fbjy1es9/aa-location.png?raw=1" alt="" color="#787878" width={13} className="sc-iRbamj blSEcj" style={{display: 'block', backgroundColor: 'rgb(255,255,255)'}} />
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td style={{padding: '0px'}}>
                                <span color="#000000" className="sc-csuQGl CQhxV" style={{fontSize: '11px', color: 'rgb(0, 0, 0)'}}>
                                  Suite 415, Level 4,<br /> 2-8 Brookhollow Ave, <br />
                                  Norwest NSW 2153
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table cellPadding={0} cellSpacing={0} className="sc-gPEVay eQYmiW" style={{verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial'}}>
                          <tbody>
                            <tr>
                              <td height={30} />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height={5}></td>
            </tr>
            <tr>
              <td style={{paddingLeft: 0, paddingRight: 0, paddingTop: 10, paddingBottom: 0, fontSize: '10px', lineHeight: '14px', color: '#787878' }}><div style={{maxWidth: '450px'}}>This email and any attachments with it are confidential, may be subject to copyright and are intended solely for the use of the addressee. If you are not the intended recipient, you must not copy, retain or distribute it or take any action in reliance on it. If you have received this email in error, please notify us and destroy the original transmission.</div></td>
            </tr>
          </tbody>
      </table>
        );
}

export default AASignature