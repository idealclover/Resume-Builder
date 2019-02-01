# {{name}}
-----
{{each contact contact_val}}
> {{contact_val}}
{{/each}}

{{each categories category_val category_key}}
## {{category_key}}
-----
{{each category_val project_val}}
### {{project_val.name}}

{{if project_val.time}}{{project_val.time}}
{{/if}}{{if project_val.role}}
{{project_val.role}}
{{/if}}{{if project_val.position}}
{{project_val.position}}{{/if}}
{{each project_val.details details}}
* {{details}}{{/each}}
{{/each}}{{/each}}
