import { FETCH_USER } from '../actions/index';

const INITIAL_STATE =null;

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case FETCH_USER:
			return action.playload || false;
		default:
			return state;
	}
}