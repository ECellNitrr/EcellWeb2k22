import React, { Component } from "react";
import Loader from '../../api_loader/api_loader';
import TabHeader from './tab_header'
import TabContent from './tab_content'
import "./timeline.css"
import plant1 from "./../../../assets/2010.png"
import plant2 from "./../../../assets/2011.png"
import plant3 from "./../../../assets/2012.png"
import plant4 from "./../../../assets/2013.png"
import plant5 from "./../../../assets/2014.png"
import plant6 from "./../../../assets/2015.png"
import plant7 from "./../../../assets/2016.png"
import plant8 from "./../../../assets/2017.png"
import plant9 from "./../../../assets/2018.png"
import plant10 from "./../../../assets/2019.png"
import plant11 from "./../../../assets/2020.png"
import plant12 from "./../../../assets/2021.png"

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onLeftBtnPressed = this.onLeftBtnPressed.bind(this);
        this.onRightBtnPressed = this.onRightBtnPressed.bind(this);
    }

    nofTabs = 12;

    state = {
        loading: false,
        activeTabId: 12
    };

    onHeaderClick(tabId) {
        this.setState({
            activeTabId: tabId
        });
    }

    onLeftBtnPressed() {
        let newTabId = this.state.activeTabId - 1;
        if (newTabId > 0) {
            this.setState({
                activeTabId: newTabId
            });
        }
    }

    onRightBtnPressed() {
        let newTabId = this.state.activeTabId + 1;
        if (newTabId <= this.nofTabs) {
            this.setState({
                activeTabId: newTabId
            });
        }
    }
    render() {
        let tabStates = [];
        for (var i = 0; i < 12; i++) {
            if (i + 1 == this.state.activeTabId) {
                tabStates[i] = true;
            }
            else {
                tabStates[i] = false;
            }
        }
        return (<div
            className="container-fluid mainCtn"
        >
            {this.state.loading ? (
                <Loader style={{ margin: "50px auto" }} />
            ) : (
                    <div className="ctnCols contCol">
                        <div className="tab-wrapper">
                            <div className="tab-cover">
                                <div className="tl-header_wrapper">
                                    <div className="tl_header">
                                        Timeline
                                    </div>
                                    <div className="tl-header_border"></div>
                                </div>
                                <div className="tab_header-wrapper-cover">
                                    <div className="tab_header-controller" onClick={this.onLeftBtnPressed}>
                                        {(this.state.activeTabId > 1) ? (<i class="fas fa-angle-left"></i>
                                        ) : ("")}
                                    </div>
                                    <div className="tab_header-wrapper">
                                        <TabHeader tabId={1} title="2010" isActive={tabStates[0]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={2} title="2011" isActive={tabStates[1]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={3} title="2012" isActive={tabStates[2]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={4} title="2013" isActive={tabStates[3]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={5} title="2014" isActive={tabStates[4]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={6} title="2015" isActive={tabStates[5]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={7} title="2016" isActive={tabStates[6]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={8} title="2017" isActive={tabStates[7]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={9} title="2018" isActive={tabStates[8]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={10} title="2019" isActive={tabStates[9]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={11} title="2020" isActive={tabStates[10]} onClick={this.onHeaderClick} />
                                        <TabHeader tabId={12} title="2021" isActive={tabStates[11]} onClick={this.onHeaderClick} />
                                    </div>
                                    <div className="tab_header-controller" onClick={this.onRightBtnPressed}>
                                        {(this.state.activeTabId < this.nofTabs) ? (<i class="fas fa-angle-right"></i>
                                        ) : ("")}
                                    </div>
                                </div>
                            </div>
                            <div className="tab_content-wrapper">
                                <TabContent isActive={tabStates[0]} tabId={1} year={2010} img={plant1} >
                                    With the collective efforts of our seniors, Sameer Shekhar(Founder and core member) Rahul Babu(Founder and Core member), Deepak Sharma(Core member), Vikas Singh(Core member), was laid the foundation stone of E-Cell. The committee initially began with a team of 40 members. Their very first initiative as the committee came into force, was the launch of magazine foe which Mr. Nagesh Banchhor, the owner of RK Mall, Mr. Vinay Paremesarem, founder of Mysore walks, Mr. Nitin Gupta, comedian, were interviewed.
                                </TabContent>
                                <TabContent isActive={tabStates[1]} tabId={2} year={2011} img={plant2} >
                                    E-Cell organized the “Counselling Quiz”, one-of-a-kind counselling session where a student was required to give a test. Based on one’s interest and aptitude, a profession suitable for him/her could be predicted. This was followed by counselling by our seniors who counselled the students and gave them life worthy guidance and advice. This event was a huge success.The motto of the event was to give the 360 degree know-how of one's career based on his/her aptitude by sharing minutest of particulars that they need to possess inorder to suvive in the field and prosper in it.
                                </TabContent>
                                <TabContent isActive={tabStates[2]} tabId={3} year={2012} img={plant3} >
                                    The very beginning of E-Cell started with the Annual Business Plan event, “B-Plan” that invited executive summaries. This year saw the 1st Annual Entrepreneurship Summit, the inception of flagship events of E-Cell as a part of Eclectika 2012. ACME- The Engineer’s Day events- consisting of Group Discussion based on Technical, Business, Current Affairs followed by Personal Interview.
                                </TabContent>
                                <TabContent isActive={tabStates[3]} tabId={4} year={2013} img={plant4} >
                                    Entrepreneurship Development Program – was started in 2013 by NIESBUD under the Ministry Of MSME. A 6-day E-learning module followed by Test, workshop and orientation, an initiative to inculcate entrepreneurial, managerial and leadership skills among students. A good opportunity for students who wish to own a start-up, who wants to work in the management sector, who wish to become entrepreneurs. Workshops and orientations were a cardinal part of it.
                                </TabContent>
                                <TabContent isActive={tabStates[4]} tabId={5} year={2014} img={plant5} >
                                    The B-Plan competition was organized by E-Cell as a part of Eclectika’14. Not only this, but the inception of first ever Wallstreet happened. This amazing series of competetions included “HR Sutra” which included aptitude round to test one’s technical skills and GDPI for enhancing the soft skills.The Case-D-Studio, to give a glimpse of management level crises to a technical level issue. Also the Cricnometrica, to give one a feel of IPL auction where you need to “BID FOR THE BEST”.E-Cell also organized it’s flagship events in Aavartan’14 – Techno-Management Fest.
                                </TabContent>
                                <TabContent isActive={tabStates[5]} tabId={6} year={2015} img={plant6} >
                                    The session began with E-Cell organizing it’s first event which was ‘INNOVATION YATRA’. An exclusive speaker session by Mr. Vikas Rajput, entrepreneurship mentor, Goldman Sachs-NEN certified, in collaboration with Lemon School of Entrepreneurship. Followed by the Engineer’s Day Celebration. E-Summit 2015 as a part of Aavartan’15, brought with it much more innovative and riveting events such as Cluedo, Ad-o-holic and more.
                                </TabContent>
                                <TabContent isActive={tabStates[6]} tabId={7} year={2016} img={plant7} >
                                    In association with E-Cell, MSME – Development Institute Raipur, organized the One-Day awareness programme on “Support for entrepreneurial and managerial development of SMEs through Incubators”. An informative and interactive workshop on “Preparing Details Project Report” was organized with the aim to provide direction to the budding entrepreneurs. With the E-Cell progressing by leaps and bounds, was successful in establishing a benchmark in the legacy of it’s existence, as the E-Summit 2016 was organized as an independent Summit by the E-Cell.
                                </TabContent>
                                <TabContent isActive={tabStates[7]} tabId={8} year={2017} img={plant8} >
                                    A total of 18 startups were called in for the startup camp, giving internship opportunity to students.
                                    Mr. Harjeet Khanduja (Vice President Human Resources at Reliance Jio Infocomm), Mr. Rishabh Dev (Managing Director at Mapplinks and Mapplinks Academy), Mr. Saransh Ray (Associate at Invest India, Startup India Hub), Mr. Rahul Tyagi (Vice President- Training at Lucideus), Ms. Abi Aryan ( Chief Business Development Officer at Coinsecure), were called in for the speaker session. Also, Think Raipur was launched in the same year.
                                </TabContent>
                                <TabContent isActive={tabStates[8]} tabId={9} year={2018} img={plant9} >
                                    The Startup Camp was organized for the first time. Numerous fledgling start-ups were invited, which opened up internship opportunities for students. Also, there was one on one interaction with the students, giving them an insight into the world of Entrepreneurs.
                                    Mr. Kumar Gaurav(Founder and CEO of Cashaa), Mr. Gopichand Katragadda(Ex. CTO and director of Tata companies), Mr. Dan Ram(A 5x TEDx Speaker and co-founder of Parkpnp) and Miss Nandini Vaidyanathan(Chairman and Managing Director of CARMa) were called in for the Speaker Session.
                                </TabContent>
                                <TabContent isActive={tabStates[9]} tabId={10} year={2019} img={plant10} >
                                    E-summit '19 was organized on a whole new level. It was the first time the event was held outside the institute campus, in an auditorium to accommodate a larger audience. Innovation manthan was introduced for the first time, it is designed to showcase the ideas and solutions to modern day problems given by the young and prolific minds. Also, to guide these ideas scientifically, commercially and socially.
                                    Six investors attended the Start-up camp giving a opportunity for the startups to get funded.
                                    Internship-portal was launched in 2019, for providing internship opportunities to students.
                                </TabContent>
                                <TabContent isActive={tabStates[10]} tabId={11} year={2020} img={plant11} >
                                    Ministry of MSME approved NIT Raipur as Business Incubator. It allowed students to be receive a grant of Rs. 15 Lakhs per Idea to convert their Innovative Ideas into Successful Businesses. On 15th Feb 2020, New India Entrepreneurship Conclave was organized at IIIT Naya Raipur, in which various speakers like Shashikant Chaudhary, Sibasish Mishra, Gautam Sivaranakrishnan, Shreyansh Singhal, and Anirban Chatterjee came and ignited the young minds. in April 2020, E-cell along with the support of I-cell NIT Raipur brought an internship opportunity for start-up and innovative Ideas. Amid the pandemic, various webinars were conducted on various topics so that students can make the best use of their time in lockdown.
                                </TabContent>
                                <TabContent isActive={tabStates[11]} tabId={12} year={2021} img={plant12} >
                                In January 2021 ,The Entrepreneurship Cell, NIT Raipur invited students to share their buisness ideas and assisted them on getting best opportunities and providing them a platform to lift up their zeal and start their enterpreneurial journey.
                                    Amidst pandemic Ecell conducted its first online B-model competition in Februrary 2021, Which provided a platform to get mentorship from experienced mentors and thus connect budding entrepreneurs and startups with angel investors and venture capitalists.
                                    Mr Ankit Prasad ,A tech startup founder and Angel investor with his name on Forbes30 U30 list was invited to share his key secrets, on startups, innovation and leadership during Buisness model workshop.  
                                    These mentorships were provided by very experienced and talented entrepreneurs like Dhruv Nath, Director of 'Lead Angles Network'and co-Author of 'Funding your startup and other nightmares',Virendra Sharma co-founder of KUMPEL
                                    and Sakshi Gupta Mentor at Atal Innovation Mission and Startup India.
                                </TabContent>
                            </div>
                        </div>
                    </div>
                )}
        </div>
        );
    }
}

export default Timeline;