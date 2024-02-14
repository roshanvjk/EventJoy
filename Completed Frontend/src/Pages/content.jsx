import leftimg from '../assets/Images/birthday-icon.png';
function Content() {
    return ( 
        <div className="content">
            <div className="content-left">
                <div className="content-head">
                    <h4>Every Birthday Deserves the Best!</h4>
                </div>
                <div className="content-para">
                    <p>
                    Our vision is to provide a dynamic and user-friendly solution for individuals, 
                    families, and organizations to effortlessly organize, plan, and celebrate birthdays. 
                    We believe that birthdays are more than just a date on the calendar, they are opportunities to connect, 
                    express gratitude, and create lasting memories
                    </p>
                </div>
            </div>
            <div className="content-right">
                <img src={leftimg} alt="Birthday Icon" />
            </div>
        </div>
     );
}

export default Content;