---
date_created: <% tp.file.creation_date("YYYY-MM-DD") %>
---
tags:: [[People]]<% tp.file.cursor(1) %>

# <% tp.file.title %>

## Skills
- 

## Notes
- 

## Meetings
```dataview
TABLE date(file.frontmatter.date_created) as Created
FROM "Meetings" where contains(people, [[<% tp.file.title %>]])
SORT date(file.frontmatter.date_created) DESC
```

## One-on-ones (1:1s)
```dataview
TABLE date(file.frontmatter.date_created) as Created
FROM "One-on-ones" where contains(people, [[<% tp.file.title %>]])
SORT date(file.frontmatter.date_created) DESC
```