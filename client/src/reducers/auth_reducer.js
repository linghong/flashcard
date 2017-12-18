import { FETCH_USER } from '../actions/index';

const INITIAL_STATE =null;

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}