module.exports = async (params) => {
    const activeFile = params.app.workspace.activeEditor?.file
    if (!activeFile || !activeFile.path.includes('Fleeting')) {
        new params.obsidian.Notice('(ERROR) Active note must be a Fleeting note', 5000)
        return
    }

    console.log('activeFile: ', activeFile)

    const name = await params.quickAddApi.inputPrompt("Note name")
    const noteContent = (await params.app.vault.read(activeFile))
        .replace("[[Fleeting]]", "[[Permanent]]")
        .replace(/(tags::.+\n)/, `$1\n# ${name}\n`)
    // Preserves the extension
    const truncatedNoteTitle = activeFile.name
        .replace(activeFile.basename, `${activeFile.basename} - ${name}`.substring(0, 253))

    await params.app.vault.modify(activeFile, noteContent)
    await params.app.fileManager.renameFile(activeFile, `+Permanent Notes/${truncatedNoteTitle}`)
}
