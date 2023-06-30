module.exports = async (params) => {
    const files = params.app.vault.getMarkdownFiles().filter(file => file.path.startsWith("People"))
    const pickedFile = await params.quickAddApi.suggester(
        (file) => file.basename,
        files
    )
    params.variables = { person: pickedFile.basename };
}
