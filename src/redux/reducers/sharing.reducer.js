import { sharingConstants } from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
    sharedNotesData: [],
    selectedSharedNoteDetails: [],
    mySharedUsers: [],
};

const sharingReducer = (state = initialState, action) => {
    // console.log(action);
    // console.log(action.payload);

    switch (action.type) {
        // <===================> getAllSharedNotes <===================>
        case sharingConstants.GET_ALL_SHARED_NOTES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sharingConstants.GET_ALL_SHARED_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                sharedNotesData: action.payload,
            };
        case sharingConstants.GET_ALL_SHARED_NOTES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> getSharedNoteDetailsBySharingId <===================>
        case sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                selectedSharedNoteDetails: action.payload,
            };
        case sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> shareNote <===================>
        case sharingConstants.SHARE_NOTE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sharingConstants.SHARE_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                sharedNotesData: [...state.sharedNotesData, action.payload],
            };
        case sharingConstants.SHARE_NOTE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> updateSharedNoteDetailsBySharingId <===================>
        case sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'update success',
                sharedNotesData: state.sharedNotesData?.map((note) => {
                    if (note.id === action.payload?.model?.id) {
                        // console.log(action.payload);

                        return {
                            ...note,
                            shared_to: action.payload?.shared_to,
                            note_id: action.payload?.note_id,
                            allowed: action.payload?.allowed,
                        };
                    }
                    return { ...note };
                }),
            };
        case sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // <===================> mySharedUsers <===================>
        case sharingConstants.MY_SHARED_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case sharingConstants.MY_SHARED_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                mySharedUsers: action.payload,
            };
        case sharingConstants.MY_SHARED_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default sharingReducer;
