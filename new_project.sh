if [ $# -eq 0 ]
  then
    echo "usage: new_project.sh dirname"
    exit 1
fi
mkdir "$1"
cp empty-example/* "$1"
