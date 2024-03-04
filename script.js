const Root = document.getElementById("root");
const H1 = React.createElement('h1', {}, "Topics Covered")


// ReactDOM.render(H1 , Root)
const Paratext = "The following is a list of all topics we cover in the MDN learning area"
const Paragraph = React.createElement('p' , {} , Paratext )

const gettingStartedLink = React.createElement('a' ,{href : 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web'} , 'Getting Started With The Web');

const ParaText2 = "Provides a practical introduction to web Development for complete beginners."
const Paragraph2 = React.createElement('p' , {} , ParaText2);

const htmlStructuringLink = React.createElement('a' ,{href : 'https://developer.mozilla.org/en-US/docs/Learn/HTML'} , 'HTML - Structuring the web');

const Paratext3 = "HTML is the language that we use to structure the different parts of our content and define what their meaning and purpose is. This topic teaches HTML in detail"
const Paragraph3 = React.createElement('p' ,{} , Paratext3);


const cssStylingLink = React.createElement('a' , {href : 'https://developer.mozilla.org/en-US/docs/Learn/CSS'} , 'CSS - Styling the web')
const Paratext4 = "CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animations. This topic provides comprehensive coverage of CSS."
const Paragraph4 = React.createElement('p' , {} , Paratext4);


const divContainer = React.createElement('div' , {} , H1, Paragraph , gettingStartedLink,Paragraph2,htmlStructuringLink,Paragraph3 , cssStylingLink , Paragraph4 ); 

ReactDOM.render(divContainer , Root);