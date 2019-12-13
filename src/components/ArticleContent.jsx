import React, { useContext } from 'react'
import { publishTime, toggleClassesWdarkMode } from '../functions/helpers'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import CommentBlock from './CommentBlock'
import '../styles/ArticleContent.css'

function ArticleContent(props) {
  const {
    urlToImage,
    author,
    publishedAt,
    title,
    content
  } = props.selectedArticle;

  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={toggleClassesWdarkMode(darkMode, "article__content")}>

      <div className={toggleClassesWdarkMode(darkMode, "article__content__hide")} style={currentUser ? { display: "none" } : { display: "flex" }}>
        <h3 className="article__content__hide-message">If you would like to continue reading this article please sign in</h3>
        <button className={toggleClassesWdarkMode(darkMode, "article__content__hide-back-btn")} onClick={props.handleGoBack}>Go Back</button>
      </div>

      <img className="article__content-image" src={urlToImage} alt="article" />

      <div className={toggleClassesWdarkMode(darkMode, "article__content-details")}>
        <span>{author}</span>
        <span>{publishTime(publishedAt)}</span>
      </div>

      <h2 className={toggleClassesWdarkMode(darkMode, "article__content-title")}>{title}</h2>
      <p className="article__content-real">{content}</p>
      <p className="article__content-fake">
        Let us not wallow in the valley of despair, I say to you today, my frie
        And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."
        I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.
        <br /><br />
        <span className={toggleClassesWdarkMode(darkMode, "article__content-important")}>I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked    places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it  together."</span>
        <br /><br />
        I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.
        I have a dream today!
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.
        I have a dream today!
        I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."2
        This is our hope, and this is the faith that I go back to the South with.
        With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.
        And this will be the day -- this will be the day when all of God's children will be able to sing with new meaning:
        <br /><br />
        My country 'tis of thee, sweet land of liberty, of thee I sing.
        Land where my fathers died, land of the Pilgrim's pride,
        From every mountainside, let freedom ring!
        And if America is to be a great nation, this must become true.
        And so let freedom ring from the prodigious hilltops of New Hampshire.
        Let freedom ring from the mighty mountains of New York.
        Let freedom ring from the heightening Alleghenies of Pennsylvania.
        Let freedom ring from the snow-capped Rockies of Colorado.
        Let freedom ring from the curvaceous slopes of California.
        But not only that:
        Let freedom ring from Stone Mountain of Georgia.
        Let freedom ring from Lookout Mountain of Tennessee.
        Let freedom ring from every hill and molehill of Mississippi.
        From every mountainside, let freedom ring.
        And when this happens, and when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual:
        Free at last! Free at last!
        Thank God Almighty, we are free at last!
        <br /><br />
        <span className={toggleClassesWdarkMode(darkMode, "article__content-important")}>I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.</span>
        <br /><br />
        Let us not wallow in the valley of despair, I say to you today, my frie
        And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."
        I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.
        <br /><br />
        I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.
        I have a dream today!
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.
        I have a dream today!
        I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."2
        This is our hope, and this is the faith that I go back to the South with.
        With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.
        And this will be the day -- this will be the day when all of God's children will be able to sing with new meaning:
        <br /><br />
        My country 'tis of thee, sweet land of liberty, of thee I sing.
        Land where my fathers died, land of the Pilgrim's pride,
        From every mountainside, let freedom ring!
        And if America is to be a great nation, this must become true.
        And so let freedom ring from the prodigious hilltops of New Hampshire.
        Let freedom ring from the mighty mountains of New York.
        Let freedom ring from the heightening Alleghenies of Pennsylvania.
        Let freedom ring from the snow-capped Rockies of Colorado.
        Let freedom ring from the curvaceous slopes of California.
        But not only that:
        Let freedom ring from Stone Mountain of Georgia.
        Let freedom ring from Lookout Mountain of Tennessee.
        Let freedom ring from every hill and molehill of Mississippi.
        From every mountainside, let freedom ring.
        And when this happens, and when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual:
        Free at last! Free at last!
        Thank God Almighty, we are free at last!
        <br /><br />
        Let us not wallow in the valley of despair, I say to you today, my frie
        And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."
        I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.
        <br /><br />
        I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.
        I have a dream today!
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.
        I have a dream today!
        I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."2
        This is our hope, and this is the faith that I go back to the South with.
        With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.
        And this will be the day -- this will be the day when all of God's children will be able to sing with new meaning:
        <br /><br />
        My country 'tis of thee, sweet land of liberty, of thee I sing.
        Land where my fathers died, land of the Pilgrim's pride,
        From every mountainside, let freedom ring!
        And if America is to be a great nation, this must become true.
        And so let freedom ring from the prodigious hilltops of New Hampshire.
        Let freedom ring from the mighty mountains of New York.
        Let freedom ring from the heightening Alleghenies of Pennsylvania.
        Let freedom ring from the snow-capped Rockies of Colorado.
        Let freedom ring from the curvaceous slopes of California.
        But not only that:
        Let freedom ring from Stone Mountain of Georgia.
        Let freedom ring from Lookout Mountain of Tennessee.
        Let freedom ring from every hill and molehill of Mississippi.
        From every mountainside, let freedom ring.
        And when this happens, and when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual:
        Free at last! Free at last!
        Thank God Almighty, we are free at last!
        <br /><br />
        Let us not wallow in the valley of despair, I say to you today, my frie
        And so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.
        I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."
        I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.
        I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.
        <br /><br />
        I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.
        I have a dream today!
        I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.
        I have a dream today!
        I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."2
        This is our hope, and this is the faith that I go back to the South with.
        With this faith, we will be able to hew out of the mountain of despair a stone of hope. With this faith, we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith, we will be able to work together, to pray together, to struggle together, to go to jail together, to stand up for freedom together, knowing that we will be free one day.
        And this will be the day -- this will be the day when all of God's children will be able to sing with new meaning:
        <br /><br />
        My country 'tis of thee, sweet land of liberty, of thee I sing.
        Land where my fathers died, land of the Pilgrim's pride,
        From every mountainside, let freedom ring!
        And if America is to be a great nation, this must become true.
        And so let freedom ring from the prodigious hilltops of New Hampshire.
        Let freedom ring from the mighty mountains of New York.
        Let freedom ring from the heightening Alleghenies of Pennsylvania.
        Let freedom ring from the snow-capped Rockies of Colorado.
        Let freedom ring from the curvaceous slopes of California.
        But not only that:
        Let freedom ring from Stone Mountain of Georgia.
        Let freedom ring from Lookout Mountain of Tennessee.
        Let freedom ring from every hill and molehill of Mississippi.
        From every mountainside, let freedom ring.
        And when this happens, and when we allow freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual:
        Free at last! Free at last!
        Thank God Almighty, we are free at last!
      </p>

      <CommentBlock selectedArticle={props.selectedArticle} />
    </div>
  );
}

export default ArticleContent;