---
date_created: <% tp.file.creation_date("YYYY-MM-DD") %>
---
tags:: [[Projects]]<% tp.file.cursor(1) %>
people:: 

# <% tp.file.title %>

## Notes



## Tasks
- [ ] 

## Meetings
```dataview
TABLE date(file.frontmatter.date_created) as Created
FROM "Meetings" where contains(tags, [[<% tp.file.title %>]])
SORT date(file.frontmatter.date_created) DESC
```

## Related Issues
```dataview
TABLE date(file.frontmatter.date_created) as Created
FROM "Issues" where contains(tags, [[<% tp.file.title %>]])
SORT date(file.frontmatter.date_created) DESC
```

## Related Notes
```dataview
TABLE date(file.frontmatter.date_created) as Created
FROM -"Issues" AND -"Meetings" where contains(tags, [[<% tp.file.title %>]])
SORT date(file.frontmatter.date_created) DESC
```