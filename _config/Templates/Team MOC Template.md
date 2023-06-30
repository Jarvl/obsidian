---
date_created: <% tp.file.creation_date("YYYY-MM-DD") %>
---
tags:: [[Teams]]<% tp.file.cursor(1) %>

# Team Members
```dataview
LIST FROM "People" where contains(tags, [[]])
SORT ASC
```