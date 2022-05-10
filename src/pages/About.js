import React from "react"
import {  useNavigate } from "react-router-dom";

import '../App.css';


function About(){
    const navigate = useNavigate();


    return(
    <div className='sections about'>
        <div className="exit">
            <div></div>
            <button onClick={() => navigate("/garden")}>
                <span  className="close-btn"></span>
            </button>
        </div>
        <div className="words">

          
        <div className="column1">
            <h1 className="ab">Redefining 
            <br/>
            Country Roads</h1>
            <div className="aboutCard">
                <p>
                Redefining Country Roads is a virtual space where you can learn more about the history of the key sounds of the South. <br />
<br />
In this space, you can listen to how iconic country instruments and playing techniques have progressed through history while reading about their backgrounds and inspirations. This history lesson takes place in the form of flowers growing in a desert, the desert representing the whitewashed narrative of the South, taking cues from old Western movies that have defined the imagery of the current age of country music.<br />
<br />
The key idea of this project is to highlight Black and Brown stories of the South and rewrite the narrative that country music is a &ldquo;white&rdquo; art form. This project includes 3D modeled flowers that are significant to the cultural groups being represented and music snippets gathered from the Spotify API to provide a brief overview of the modern and past sounds of country music. <br />

</p>
                </div>
                <div className="aboutCard">
                    <p>This website is an ongoing project by Jiyoon Moon, a Southerner and creative technologist learning more about the sounds of her hometown. Contact her here with any questions, comments, or ideas.
                    </p>
                </div>
                
                <div className="aboutCard">
                <h3>BIBLIOGRAPHY:</h3>
                <p>
                Print-Based Readings:<br />
Brady, Erika. &ldquo;&lsquo;Are You from Dixie?&rsquo;: Geography Iconography in Country Music&rsquo;s Realms <br />
of Memory.&rdquo; The Journal of American Folklore 127, no. 504 (2014): 230&ndash;32. <br />
https://doi.org/10.5406/jamerfolk.127.504.0230.<br />
Desai, Jigna, and Khyati Y. Joshi, eds. Asian Americans in Dixie: Race and <br />
Migration in the South. University of Illinois Press, 2013. <br />
http://www.jstor.org/stable/10.5406/j.ctt3fh5ww.<br />
Malone, Bill C., and Charles Reagan Wilson. &ldquo;Country Music.&rdquo; In The New Encyclopedia of <br />
Southern Culture: Volume 12: Music, edited by BILL C. MALONE, 48&ndash;56. University of North Carolina Press, 2008. http://www.jstor.org/stable/10.5149/9781469616667_malone.11.<br />
Meier, Kenneth J. 2019. &ldquo;Looking for Meaning in All the Wrong Places: Country Music<br />
 and the Politics of Identity*.&rdquo; Social Science Quarterly (Wiley-Blackwell) 100 (1): <br />
 89&ndash;108. doi:10.1111/ssqu.12556.<br />
Miller, Karl Hagstrom. Segregating Sound: Inventing Folk and Pop Music in the Age of <br />
Jim Crow. Duke University Press, 2010. https://doi.org/10.2307/j.ctv125jq7b.<br />
O'Sullivan, S.E.M. 2016, &ldquo;Playing &ldquo;Redneck&rdquo;: White Masculinity and Working-Class <br />
Performance on Duck Dynasty.&rdquo; J Pop Cult, 49: 367-384. <br />
Peterson, R. A. 1999. Creating country music: Fabricating authenticity. University of <br />
Chicago Press. <br />
Woods, C. A., &amp; Gilmore, R. W. 2017. Development arrested: The blues and plantation<br />
power in the Mississippi Delta. Verso. <br />
<br />
Web articles:<br />
https://believermag.com/the-invention-of-twang/<br />
https://azdailysun.com/entertainment/how-the-yodel-was-born-tracing-the-roots-of-the-singing-cowboy/article_bab7ca55-da46-5170-9eed-11b763efcc9a.html<br />
https://texasfolklife.org/article/curriculum-guide-texas-style-fiddle<br />
https://folklife.si.edu/magazine/black-banjo-reclamation-project-african-roots<br />
https://frontporchcville.org/black-history-of-the-banjo/<br />
https://www.blackhistory.com/2019/07/truth-black-people-created-country-music.html<br />
https://www.pastemagazine.com/music/country-music-awards/6-reasons-country-music-is-blacker-than-you-think/#6-deford-bailey-and-the-grand-ole-opry<br />
https://www.pbs.org/americanrootsmusic/pbs_arm_ii_banjo.html<br />
https://happymag.tv/when-africa-met-the-west-how-the-fiddle-and-banjo-birthed-country-music/<br />
https://sites.dwrl.utexas.edu/countrymusic/the-history/the-nashville-sound/<br />
https://longreads.com/2018/08/01/the-cowboy-image-and-the-growth-of-western-music/<br />
<br />
<br />
<br />
<br />

                </p>
                </div>
        </div>



    </div>

</div>
    )
}
export default About