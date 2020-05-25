import React from 'react';
import classnames from "classnames";
import malzemeler from '../../constants/malzemeler';

    

    
    
    
    

const Malzemeler = ({malzeme,malzemeCikar,malzemeEkle,azaltButonunuGoster,secilenMalzemeler}) => {
    return ( 

        
                <>



                  
                            <li key={malzeme.id}>
                <table>
                    <tbody>

                        
                  <tr>
                    <td width="80px"> <h3>{malzeme.name}</h3></td>
                    <td>
                      <button
                        onClick={() => {
                          malzemeEkle(malzeme);
                        
                    
                    
                    }
                    
                    
                    }
                        className="malzeme-ekle"
                      >
                        Ekle
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          malzemeCikar(malzeme);

                        }}
                        className={classnames({
                          "malzeme-cikar": true,
                          disabled: !azaltButonunuGoster,
                          enabled: azaltButonunuGoster,
                        })}
                      >Azalt
                      </button>
                    </td>
                    <td>
                     {`Ürün Tutarı: ${malzeme.price} TL`}
                  
                    


                     </td>
                     <td>


                                       
                     
                    </td>
                  </tr>
                  </tbody>
                </table>
               
              </li>

                            
                </>

    );




};

export default Malzemeler;