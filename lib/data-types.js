module.exports = {
  STRING: 'VARCHAR(255)',
  TEXT: 'TEXT',
  INTEGER: 'INTEGER',
  DATE: 'DATETIME WITH TIME ZONE',  // we want timezone by default, not to be pulled into Sequelize repo
  BOOLEAN: 'TINYINT(1)',
  FLOAT: 'FLOAT',
  NOW: 'NOW',
  BIGINT: 'BIGINT'
}
