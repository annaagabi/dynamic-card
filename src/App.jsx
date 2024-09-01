import Card from "./components/card";
import Box from '../src/assets/image/Cube.svg'

export default function App(){
  return(
    <div className="card-container">
        <Card 
          image={Box}
          imgAlt="Imagem de uma caixa"
          title="Highlight benefit one"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
          />
        <Card 
          image={Box}
          imgAlt="Imagem de uma caixa"
          title="Highlight benefit two"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
        <Card 
          image={Box}
          imgAlt="Imagem de uma caixa"
          title="Highlight benefit three"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
    </div>
  )
}
