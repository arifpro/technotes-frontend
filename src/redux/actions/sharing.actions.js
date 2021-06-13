import { sharingConstants } from '../actionTypes';
import api from '../redux.config';

// <===================> GET: mySharedUsers <===================>
const mySharedUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: sharingConstants.MY_SHARED_USERS_REQUEST,
        });

        const res = await api.get(`/note/user/shared-by-me`);

        if (res.status === 200) {
            dispatch({
                type: sharingConstants.MY_SHARED_USERS_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: sharingConstants.MY_SHARED_USERS_FAILED,
                error: 'unable to get all notes',
            });
        }
    } catch (e) {
        dispatch({
            type: sharingConstants.MY_SHARED_USERS_FAILED,
            error: e,
        });
    }
};

// <===================> GET: getAllSharedNotes <===================>
const getAllSharedNotes = () => async (dispatch) => {
    try {
        dispatch({
            type: sharingConstants.GET_ALL_SHARED_NOTES_REQUEST,
        });

        const res = await api.get(`/note/share`);

        if (res.status === 200) {
            dispatch({
                type: sharingConstants.GET_ALL_SHARED_NOTES_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: sharingConstants.GET_ALL_SHARED_NOTES_FAILED,
                error: 'unable to get all shared notes',
            });
            dispatch(mySharedUsers());
        }
    } catch (e) {
        dispatch({
            type: sharingConstants.GET_ALL_SHARED_NOTES_FAILED,
            error: e,
        });
    }
};

// <===================> GET: getSharedNoteDetailsBySharingId <===================>
const getSharedNoteDetailsBySharingId = (id) => async (dispatch) => {
    try {
        dispatch({
            type: sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_REQUEST,
        });

        const res = await api.get(`/note/shared/${id}`);

        if (res.status === 200) {
            dispatch({
                type: sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_FAILED,
                error: 'unable to get shared note details by given sharing id',
            });
        }
    } catch (e) {
        dispatch({
            type: sharingConstants.GET_SHARED_NOTE_DETAILS_BY_SHARING_ID_FAILED,
            error: e,
        });
    }
};

// <===================> POST: shareNote <===================>
const shareNote = (data) => async (dispatch) => {
    try {
        dispatch({
            type: sharingConstants.SHARE_NOTE_REQUEST,
        });

        const { sharedTo, noteId } = data;
        const newShareNote = {
            shared_to: sharedTo,
            note_id: noteId,
        };

        const res = await api.post(`/note/share`, newShareNote);

        if (res.status === 200) {
            dispatch({
                type: sharingConstants.SHARE_NOTE_SUCCESS,
                payload: res.data,
            });
            dispatch(getAllSharedNotes());
            dispatch(mySharedUsers());
        } else {
            dispatch({
                type: sharingConstants.SHARE_NOTE_FAILED,
                error: 'unable to share the note',
            });
        }
    } catch (e) {
        dispatch({
            type: sharingConstants.SHARE_NOTE_FAILED,
            error: e,
        });
    }
};

// <===================> PUT: updateSharedNoteDetailsBySharingId <===================>
const updateSharedNoteDetailsBySharingId = (data) => async (dispatch) => {
    try {
        dispatch({
            type: sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_REQUEST,
        });

        const { id, sharedTo, noteId, allowed } = data;
        const updateSharedNote = {
            shared_to: sharedTo,
            note_id: noteId,
            allowed,
        };

        const res = await api.put(`/note/shared/${id}`, updateSharedNote);

        if (res.status === 200) {
            dispatch({
                type: sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_SUCCESS,
                payload: res.data,
            });
            dispatch(getAllSharedNotes());
            dispatch(mySharedUsers());
        } else {
            dispatch({
                type: sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_FAILED,
                error: 'unable to update shared note by given sharing id',
            });
        }
    } catch (e) {
        dispatch({
            type: sharingConstants.UPDATE_SHARED_NOTE_BY_SHARING_ID_FAILED,
            error: e,
        });
    }
};

export {
    getAllSharedNotes,
    getSharedNoteDetailsBySharingId,
    shareNote,
    updateSharedNoteDetailsBySharingId,
    mySharedUsers,
};
