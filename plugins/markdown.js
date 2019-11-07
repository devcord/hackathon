import Vue from 'vue'

import HighlightJS from 'markdown-it-highlightjs'
import Markdown from 'markdown-it'

Vue.mixin({
    created () {
        this.markdown = Markdown().use(HighlightJS)
    }
})
