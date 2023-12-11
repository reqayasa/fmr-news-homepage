import ListItem from "./ListItem";

function NewNewsList() {
  return (
    <div className="bg-very_dark_blue-500 m-4 px-5 py-7 md:m-0 md:px-6">
      <h1 className="text-[2rem] md:text-[40px] text-soft_orange-500 font-bold pb-8">New</h1>
      <ol className="">
        <ListItem title='Hydrogen VS Electric Cars' description='Will hydrogen-fueled cars ever catch up to EVs?'/>
        <ListItem title='The Downsides of AI Artistry' description='  What are the possible adverse effects of on-demand AI image generation?'/>
        <ListItem title='Is VC Funding Drying Up?' description='  Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
      </ol>
    </div>
  )
}

export default NewNewsList
