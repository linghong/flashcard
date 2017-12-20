import React from 'react';
import frontImg from '../data/lets-study-md.jpg';

const Landing =()=>{
	return (
		<div className="row text-darken-2">
			<h2>Welcome to Vocabulary Card Pro</h2>	
			<div className="col s6 right-align">
				<img className="img-responsive" src={frontImg} alt="study vocabulary"/>
			</div>
			<div className="col s6 left-align flow-text">
				<p>This site is for you, a student, who are eager to increase your vocabulary and get an excellent score in the standard test.</p>
				<p>Our Site has two sections: practice section and test section. Test section helps you get the idea of the percentage of SAT words you have grasped, while the vocabulary practice section help you quickily build up your vocabulary.</p>
			</div>
			<div className="center-align col S12">
				<h3>Sign Up Now to Start to Improve Your Vocabulary!</h3>
			</div>
		</div>
	);
}

export default Landing;