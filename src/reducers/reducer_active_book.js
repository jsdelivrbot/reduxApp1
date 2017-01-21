/**
 * Created by shitman on 21.01.2017.
 */
export default function (state = null, action) {
    switch (action.type) {
	    case 'BOOK_SELECTED':
	    	return action.payload
    }
	return state
}