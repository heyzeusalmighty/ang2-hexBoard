import { ActionReducer, Action } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { PlayerModel } from '../models/playerModel';



export const GET_PLAYER_DATA = 'GET_PLAYER_DATA';
export const GET_PLAYER_DATA_SUCCESS = 'GET_PLAYER_DATA_SUCCESS';
export const GET_PLAYER_DATA_FAILED = 'GET_PLAYER_DATA_FAILED'; 

export const GET_MAP_DATA = 'GET_MAP_DATA';
export const GET_MAP_DATA_SUCCESS = 'GET_MAP_DATA_SUCCESS';
export const GET_MAP_DATA_FAILED = 'GET_MAP_DATA_FAILED';


let initialState = new PlayerModel();

export const playerReducer : ActionReducer<PlayerModel> = ( state = initialState, action: Action ) => {
	switch (action.type) {
		case GET_PLAYER_DATA_SUCCESS:
			state = action.payload;
			return state;

		case GET_PLAYER_DATA_FAILED:
			console.log('oh crap, player data failed');
			return state;

		default:
			return state;
	}
}



// //import { RecipesStoreModel } from '../models/recipeStoreModel';

// //import * as _ from 'lodash';

// 


// export const GET_INSTRUCTIONS = 'GET_INSTRUCTIONS';
// export const GET_INSTRUCTIONS_SUCCESS = 'GET_INSTRUCTIONS_SUCCESS';
// export const GET_INSTRUCTIONS_FAILED = 'GET_INSTRUCTIONS_FAILED';

// let initialState = [];




// export const recipeReducer : ActionReducer<> = ( state = initialState, action: Action) => {
// 	switch (action.type) {

// 		case LOAD_RECIPES_SUCCESS:
// 		case ADD_RECIPE_SUCCESS:
// 			// check to see if this was an update
// 			let addIdx = _.findIndex(state.fullSetRecipes, { recipeName: action.payload.recipeName });
// 			if(addIdx >= 0) {
// 				state.fullSetRecipes = [
// 					...state.fullSetRecipes.slice(0, addIdx),
// 					action.payload,
// 					...state.fullSetRecipes.slice(addIdx + 1)
// 				];
// 				return state;
// 			}

// 			let x = state.recipes.concat(action.payload);			
// 			return Object.assign({}, state, { recipes: x, fullSetRecipes: x});
		
			

// 		case ADD_RECIPE_FAILED:
// 			console.warn('oh crap, add recipe failed');
// 			return state;

// 		case LOAD_RECIPES_FAILED:
// 			console.warn('of crap, loading recipes failed');
// 			return state;

// 		case ADD_RECIPE:
// 			console.log('add recipe was pinged.  Should it have?');
// 			return state;

// 		case UPDATE_RECIPE:
// 			let index = _.findIndex(state.fullSetRecipes, { _id: action.payload._id });
// 			if(index >= 0) {
// 				state.fullSetRecipes = [
// 					...state.fullSetRecipes.slice(0, index),
// 					action.payload,
// 					...state.fullSetRecipes.slice(index + 1)
// 				];
// 			}
// 			return state;

// 		case DELETE_RECIPE:
// 			console.log('you are deleting this recipe');
// 			return state;

// 		case DELETE_RECIPE_SUCCESS:
// 			console.log('you have deleted this recipe', action.payload._body, state);			
// 			return Object.assign({}, state, 
// 				{ 
// 					fullSetRecipes: state.fullSetRecipes.filter(x => x._id !== action.payload._body)
// 				}
// 			);

// 		case DELETE_RECIPE_FAILED:
// 			console.warn('oh crap, you failed to delete that recipe => ', action.payload);
// 			return state;

// 		case UPDATE_FILTER:
// 			let newFilter = state.filterCriteria.concat(action.payload);
// 			let filteredSet = state.fullSetRecipes.filter(x => 	
// 				(x.recipeName.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 )
// 			);
// 			return Object.assign({}, state, { filterCriteria: newFilter, recipes: filteredSet });

// 		case REMOVE_FILTER:
// 			return Object.assign({}, state, { filterCriteria: '', recipes: state.fullSetRecipes });

// 		case GET_INSTRUCTIONS_SUCCESS:
// 			let idx = _.findIndex(state.fullSetRecipes, { _id: action.payload._id });
// 			if (idx >= 0) {
// 				state.fullSetRecipes = [
// 					...state.fullSetRecipes.slice(0, idx),
// 					action.payload,
// 					...state.fullSetRecipes.slice(index + 1)
// 				];
// 			}
// 			return state;

// 		case GET_RECIPE:
// 			let recIdx = _.findIndex(state.fullSetRecipes, { _id: action.payload._id });
// 			return Object.assign({}, state, { selectedRecipe: state.fullSetRecipes[recIdx]});

// 		case ADD_FILTER_TAG:			
// 			if ( state.filterTags.indexOf(action.payload) === -1) {
// 				let tags = state.filterTags.concat(action.payload);
// 				let filteredByTags = state.fullSetRecipes.filter(x => 
// 					x.tags.some(t => tags.indexOf(t) >= 0)
// 				);
// 				return Object.assign({}, state, { filterTags: tags, recipes: filteredByTags });
// 			}
// 			return state;

// 		case DEL_FILTER_TAG:
// 			let revisedTags = state.filterTags.filter(x => x !== action.payload);
			
// 			let delFilter = (revisedTags.length === 0) 
// 				? state.fullSetRecipes 
// 				: state.fullSetRecipes.filter(x => x.tags.some(t => revisedTags.indexOf(t) >= 0));
			
// 			return Object.assign({}, state,
// 				{
// 					filterTags: revisedTags,
// 					recipes: delFilter	
// 				});			

			

// 		default:
// 			return state;
// 	}
// };



