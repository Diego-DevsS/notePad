export default class NoteController {
    find() {
        const data = localStorage.getItem('NotePad@notes')
        return data ? JSON.parse(data) : []
    }
    create(newNote) {
        const oldData = this.find()
        //newNote config
		if(oldData !== undefined && oldData.length > 0)
            newNote.id = (oldData[oldData.length -1].id +1)
        else
            newNote.id = 0
        newNote.dateEdition = new Date()
        //updates localStorage
        const newData = [
			...oldData? oldData : [],
			newNote,
		]
        localStorage.setItem('NotePad@notes', JSON.stringify(newData))
        
        return newData
    }
    remove(removeNote) {
        const notes = this.find()
        //remove note with note.id
        notes.splice(notes.find((note) => note.id === removeNote.id), 1)
        console.log('note', notes)
        localStorage.setItem('NotePad@notes', JSON.stringify(notes))
        
        return notes
    }
}