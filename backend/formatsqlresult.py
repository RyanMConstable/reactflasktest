import CSGOsql as c

def displayLeaders():
    return c.findTopX("totalkills", 100)