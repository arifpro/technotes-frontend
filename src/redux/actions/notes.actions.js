import { notesConstants } from '../actionTypes';
import api from '../redux.config';

// <===================> GET: getAllNotes <===================>
const getAllNotes = () => async (dispatch) => {
    try {
        dispatch({
            type: notesConstants.GET_ALL_NOTES_REQUEST,
        });

        const res = await api.get(`/note`);

        if (res.status === 200) {
            dispatch({
                type: notesConstants.GET_ALL_NOTES_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: notesConstants.GET_ALL_NOTES_FAILED,
                error: 'unable to get all notes',
            });
        }
    } catch (e) {
        dispatch({
            type: notesConstants.GET_ALL_NOTES_FAILED,
            error: e,
        });
    }
};

// <===================> GET: getNoteDetailsById <===================>
const getNoteDetailsById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: notesConstants.GET_NOTE__DETAILS_BY_ID_REQUEST,
        });

        const res = await api.get(`/note/${id}`);

        if (res.status === 200) {
            dispatch({
                type: notesConstants.GET_NOTE__DETAILS_BY_ID_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: notesConstants.GET_NOTE__DETAILS_BY_ID_FAILED,
                error: 'unable to get note details by given id',
            });
        }
    } catch (e) {
        dispatch({
            type: notesConstants.GET_NOTE__DETAILS_BY_ID_FAILED,
            error: e,
        });
    }
};

// <===================> POST: createNote <===================>
const createNote = (data) => async (dispatch) => {
    try {
        dispatch({
            type: notesConstants.CREATE_NOTE_REQUEST,
        });

        const { title, details } = data;
        const newNote = { title, details };

        const res = await api.post(`/note`, newNote);

        if (res.status === 200) {
            dispatch({
                type: notesConstants.CREATE_NOTE_SUCCESS,
                payload: res.data,
            });
            // dispatch(getAllNotes());
        } else {
            dispatch({
                type: notesConstants.CREATE_NOTE_FAILED,
                error: 'unable to create a note',
            });
        }
    } catch (e) {
        dispatch({
            type: notesConstants.CREATE_NOTE_FAILED,
            error: e,
        });
    }
};

// <===================> PUT: updateNoteById <===================>
const updateNoteById = (data) => async (dispatch) => {
    try {
        dispatch({
            type: notesConstants.UPDATE_PRODUCT_REQUEST,
        });

        const { id, title, details } = data;
        const updateNote = { id, title, details };

        const res = await api.put(`/note/${id}`, updateNote);

        if (res.status === 200) {
            dispatch({
                type: notesConstants.UPDATE_PRODUCT_SUCCESS,
                payload: res.data,
            });
            // dispatch(getAllNotes());
        } else {
            dispatch({
                type: notesConstants.UPDATE_PRODUCT_FAILED,
                error: 'unable to update product data',
            });
        }
    } catch (e) {
        dispatch({
            type: notesConstants.UPDATE_PRODUCT_FAILED,
            error: e,
        });
    }
};

// <===================> DELETE: deleteNoteById <===================>
const deleteNoteById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: notesConstants.UPDATE_PRODUCT_REQUEST,
        });

        const res = await api.put(`/note/${id}`);

        if (res.status === 200) {
            dispatch({
                type: notesConstants.UPDATE_PRODUCT_SUCCESS,
                payload: res.data,
            });
            // dispatch(getAllNotes());
        } else {
            dispatch({
                type: notesConstants.UPDATE_PRODUCT_FAILED,
                error: 'unable to update product data',
            });
        }
    } catch (e) {
        dispatch({
            type: notesConstants.UPDATE_PRODUCT_FAILED,
            error: e,
        });
    }
};

export { createNote, getAllNotes, getNoteDetailsById, updateNoteById, deleteNoteById };
