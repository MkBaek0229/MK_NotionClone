import EditorPage from "./editor/EditorPage.js";
import PostPage from "./sidebar/PostPage.js";

export default function App ({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)
    
    const initialState = []
    new PostPage({ 
        $target: $listContainer
    })
<<<<<<< HEAD
    new Editor({ 
        $target: $rendingContainer 
=======
    postPage.setState()

    const editorPage = new EditorPage({ 
        $target: $rendingContainer, 
        initialState: {
            postId: 'new',
            post: {
                title: '',
                content: ''
            }
        }
>>>>>>> 367f1d9488acbc61dbb769f842281e75f9e672bb
    })

    // editorPage.setState();
}

