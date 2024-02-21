import * as React from 'react'
import {AppContext} from './provider'
import {canLike} from './utils'
import {PostView} from './post-view'

// React class closure issue
class Post extends React.Component {
    static contextType = AppContext
    handleLikeClick = async () => {
        // const {post} = this.props
        if (!(await canLike(this.props.post, this.context.user))) return
        /* The canLike stops the function for a while, in that time if you change the post. The next like will toggle like for a new post instead of the post at click time. This behavior only happens in class component. To avoid this we can add "const {post} = this.props" before executing canLike func and handle action with post instead of this.props.post */
        this.context.toggleLike(this.props.post)
    }
    render() {
        return (
            <PostView post={this.props.post} onLikeClick={this.handleLikeClick} />
        )
    }
}
export {Post}

// Using ref to limit dependency
function useDebounce(callback, delay) {
    const callbackRef = React.useRef(callback)

    // The function call actually not change when call useDebound. However if we keep it as hook param, we need to add it in the dependency => use ref
    React.useLayoutEffect(() => {
        callbackRef.current = callback
    })
    return React.useMemo(
        () => debounce((...args) => callbackRef.current(...args), delay),
        [delay],
    )
}
