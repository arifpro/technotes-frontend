import { notesConstants } from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
    notesData: [],
    selectedNoteDetails: [],
};

const notesReducer = (state = initialState, action) => {
    // console.log(action);
    // console.log(action.payload);

    switch (action.type) {
        // <===================> getAllNotes <===================>
        case notesConstants.GET_ALL_NOTES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case notesConstants.GET_ALL_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                notesData: action.payload,
            };
        case notesConstants.GET_ALL_NOTES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> getNoteDetailsById <===================>
        case notesConstants.GET_NOTE_DETAILS_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case notesConstants.GET_NOTE_DETAILS_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                selectedNoteDetails: action.payload,
            };
        case notesConstants.GET_NOTE_DETAILS_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> createNote <===================>
        case notesConstants.CREATE_NOTE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case notesConstants.CREATE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                notesData: [...state.notesData, action.payload],
            };
        case notesConstants.CREATE_NOTE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> updateNoteById <===================>
        case notesConstants.UPDATE_NOTE_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case notesConstants.UPDATE_NOTE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'update success',
                notesData: state.notesData?.map((note) => {
                    if (note.id === action.payload?.id) {
                        // console.log(action.payload);

                        return {
                            ...note,
                            title: action.payload?.title,
                            details: action.payload?.details,
                        };
                    }
                    return { ...note };
                }),
            };
        case notesConstants.UPDATE_NOTE_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> deleteNoteById <===================>
        case notesConstants.DELETE_NOTE_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case notesConstants.DELETE_NOTE_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'delete success',
                notesData: state.notesData?.filter((note) => note.id !== action.payload?.id),
            };
        case notesConstants.DELETE_NOTE_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default notesReducer;
