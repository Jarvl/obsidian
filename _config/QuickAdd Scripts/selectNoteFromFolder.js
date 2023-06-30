FOLDER_TEXT_FIELD = "Folder Name"

module.exports = {
    entry: async (params, settings) => {
        const files = params.app.vault.getMarkdownFiles().filter(file => file.path.startsWith(FOLDER_TEXT_FIELD))
        const pickedFile = await params.quickAddApi.suggester(
            (file) => file.basename,
            files
        )
        params.variables = { selectedFolder: pickedFile.basename }
    },
    settings: {
        name: "Select Note From Folder",
        options: {
            [FOLDER_TEXT_FIELD]: {
                type: "text",
                defaultValue: "",
                placeholder: "e.g. People"
            }
        }
    }
}
