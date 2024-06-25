import Assets from '../Assets';
const ExampleArticle = () => {
  return (
    <article >
      <div>
        <img className='h-100 w-80' alt='GTA III Cover' src={Assets.gameCovers.gtaIIICover} />
        <h3>Grand Theft Auto III</h3>
        <p>An epic adventure that started a whole new thing in the industry</p>
        <p>id: 001</p>
        <p>genre: sandbox</p>
        <p>platform: pc, ps2, xbox, ipad, android</p>
      </div>
      <div>
        <img className='h-100 w-80' alt='GTA Sand Andreas Cover' src={Assets.gameCovers.gtaSACover} />
        <h3>Grand Theft Auto San Andreas</h3>
        <p>A story about a guy who tries to get out of the game, but ends up getting back in when his mother dies</p>
        <p>id: 002</p>
        <p>genre: sandbox</p>
        <p>platform: pc, ps2, xbox, ipad, android</p>
      </div>
      <div>
        <img className='h-100 w-80' alt='GTA Vice City Cover' src={Assets.gameCovers.gtaVCCover} />
        <h3>Grand Theft Auto Vice City</h3>
        <p>An adventure starring Tommy Vercetti. A gangster that get's sent down to Vice City for a heroin deal and get's run over by his boss. He then decides to get into the action of Vice City himself.
        </p>
        <p>id: 003</p>
        <p>genre: sandbox</p>
        <p>platform: pc, ps2, xbox, ipad, android</p>
      </div>
    </article>
  )
}

export default ExampleArticle;
