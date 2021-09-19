import axios from "axios";
import { useEffect, useState } from "react";
import {API_URL, IMG_PATH} from "./../../config.json";
import { Radar } from 'react-chartjs-2';
import "./viewDog.scss"
import Image from "react-bootstrap/Image"

function ViewDog(props) {
    const [dog, setDog] = useState();
    const [mh, setMh] = useState();
    const [images, setImages] = useState([]);
    const id = props.match.params.id;
    let radarData = {
        labels: ['Nyfikenhet', 'Aggresivitet', 'Socialitet', 'Jaktintresse', 'Lekfullhet'],
        datasets: [
          {
            label: dog?.dogName,
            data: mh,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
              data: [0,0,0,0,0]
          }
        ],
      };
      const options = {
        scale: {
          ticks: {min: 0, max: 5, stepSize: 1},
        },
        pointLabels: {
            display: true
        }
      };
      
    useEffect(() => {
        axios.get(`${API_URL}dog`, {
            params: {
                id
            }
        })
        .then(respons => {
          let mh = respons.data.mh
            setDog(respons.data)
            console.log(respons.data)
            radarData.datasets[0].label = respons.data.dogName
            setMh([mh.curiosity, mh.aggresion, mh.social, mh.hunting, mh.playfullness])
            respons.data.images.forEach(element => {
              setImages([element])
              console.log(images)
            });
        })
        .catch(error => {
            console.log(error)
        })
    },[props.match.params.id])
    if(dog)return (
      
        <div className="inner-main">
            <section className="main-content">
                <div className="inner-main-content halfgrid">
                   <div className="halfrow">
                     <div className="info-header"><h1 >{dog.dogName}</h1></div>
                     
                     <p>{dog.about}</p>
                    </div>
                   <div className="halfrow" style={{backgroundImage: `url(${IMG_PATH}${dog.images[0].imagePath})`}}> </div>
                   
               </div>
            </section>
            <section className="main-content ">
                <div className="inner-main-content halfgrid">
                   <div className="halfrow" style={{backgroundImage: `url(${IMG_PATH}${dog.images[1].imagePath})`}}></div>
                   <div className="halfrow"><h1>PRISER</h1> </div>
               </div>
            </section>
            <section className="main-content">
                <div className="inner-main-content halfgrid">
                   <div className="halfrow"><Radar data={radarData} options={options} /></div>
                   <div className="halfrow" style={{backgroundImage: `url(${IMG_PATH}${dog.images[2].imagePath})`}}></div>
               </div>
            </section>
        </div>
    );
    return <div> INGET</div>
  }
  
  export default ViewDog;
  