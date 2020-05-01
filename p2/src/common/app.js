import Api from '@/common/api.js';

export const config = {
    firebase: {
        apiKey: 'AIzaSyD5JPU5xcOFFbTSWuvE0-_AcuUX46IkoXM',
        projectId: 'e28-dream-machine'
    }
}

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});