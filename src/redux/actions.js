export const addChoice = ({choice, value}) => (dispatch)=> dispatch({type: 'ADD_CHOICE', choice, value})

export const removeChoice = ({choice, value}) => (dispatch)=> dispatch({type: 'REMOVE_CHOICE', choice, value})

export const removeAllValues = ({choice}) => (dispatch)=> dispatch({type: 'REMOVE_ALL_VALUES', choice})

export const singleChoice = ({choice, value}) => (dispatch)=> dispatch({type: 'SINGLE_CHOICE', choice, value})